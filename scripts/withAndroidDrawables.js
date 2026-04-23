const { withDangerousMod } = require('@expo/config-plugins');
const fs = require('fs');
const path = require('path');

module.exports = (config) => {
  return withDangerousMod(config, [
    'android',
    async (config) => {
      // Onde estão seus backups seguros
      const srcDir = path.join(config.modRequest.projectRoot, 'assets/images/drawables');
      
      // Onde o Android precisa deles para o <Icon drawable="..." /> funcionar
      const destDir = path.join(config.modRequest.projectRoot, 'android/app/src/main/res/drawable');

      if (fs.existsSync(srcDir)) {
        // Cria a pasta de destino caso o prebuild tenha deletado
        if (!fs.existsSync(destDir)) {
          fs.mkdirSync(destDir, { recursive: true });
        }
        
        const files = fs.readdirSync(srcDir);
        files.forEach(file => {
          const srcPath = path.join(srcDir, file);
          const destPath = path.join(destDir, file);
          
          fs.copyFileSync(srcPath, destPath);
        });
        console.log('📦 [Grocify Plugin] Drawables sincronizados com a pasta nativa.');
      }
      return config;
    },
  ]);
};
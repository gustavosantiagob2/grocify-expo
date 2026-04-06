const fs = require("fs");
const path = require("path");

const root = process.cwd();
const oldAppDir = path.join(root, "app");
const newAppDir = path.join(root, "app-example");
const newAppStepDir = path.join(root, "app");

const indexContent = `import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
`;

// 1. Renomeia a pasta 'app' atual para 'app-example'
if (fs.existsSync(oldAppDir)) {
  fs.renameSync(oldAppDir, newAppDir);
  console.log("✓ Pasta /app movida para /app-example.");
}

// 2. Cria uma nova pasta 'app' limpa
fs.mkdirSync(newAppStepDir);
console.log("✓ Nova pasta /app criada.");

// 3. Cria o arquivo index.tsx básico
fs.writeFileSync(path.join(newAppStepDir, "index.tsx"), indexContent);
console.log("✓ Arquivo app/index.tsx criado.");

console.log(
  "\nPronto! O projeto foi resetado. Agora você tem uma tela em branco para começar.",
);

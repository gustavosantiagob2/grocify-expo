<div align="center">
  <img src="./assets/images/favicon.png" width="80" alt="Grocify Logo" />
  <h1>🛒 GROCIFY</h1>
  <p><strong>Grocery Management App</strong></p>

  <p>
    <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
    <img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  </p>
</div>

---

### 📝 Sobre o Projeto
O **Grocify** é um aplicativo mobile *full-stack* desenvolvido para gerenciar listas de compras de forma inteligente e colaborativa. Com foco em performance e interface moderna (UI/UX), o app organiza itens por categoria e sincroniza dados em tempo real.

## 🚀 Tecnologias Utilizadas
Este projeto utiliza o ecossistema de ponta em 2026:

* **Framework:** [React Native](https://reactnative.dev/) com [Expo](https://expo.dev/)
* **Roteamento:** [Expo Router](https://docs.expo.dev/router/introduction/) (File-based)
* **Estilização:** [NativeWind](https://www.nativewind.dev/) (Tailwind CSS)
* **Autenticação:** [Clerk](https://clerk.com/) (Google, GitHub e Apple)
* **Database:** [PostgreSQL](https://www.postgresql.org/) ([Neon](https://neon.tech/)) + [Drizzle ORM](https://orm.drizzle.team/)
* **Estado:** [Zustand](https://docs.pmnd.rs/zustand/)
* **Monitoramento:** [Sentry](https://sentry.io/)

---

## ✨ Funcionalidades Principais
- 🔐 **Auth Segura:** Login social via Clerk.
- 📝 **Lista Inteligente:** Gestão de itens com gestos nativos.
- 📂 **Categorização:** Organização automática (Produce, Dairy, Pantry).
- 📊 **Insights:** Gráficos de distribuição de compras.
- 🌓 **Dark Mode:** Suporte nativo completo a temas.
- 🧊 **Native Tabs:** Efeito "Liquid Glass" e ícones sincronizados via Plugin.

---

## 📦 Estrutura de Arquivos
```text
├── assets/             # Recursos de mídia e drawables nativos
├── scripts/            # Expo Config Plugins (Automação nativa)
├── src/
│   ├── app/            # Rotas e telas (Expo Router)
│   ├── components/     # UI Components reutilizáveis
│   ├── hooks/          # Lógica de negócio customizada
│   ├── lib/            # Configurações de API e Database
│   └── store/          # Estado global com Zustand
└── drizzle.config.ts   # Configuração do ORM
````

## 🛠️ Como rodar o projeto

Siga os passos abaixo para configurar o ambiente de desenvolvimento localmente.

### 1. Pré-requisitos
Certifique-se de ter instalado em sua máquina:
* **Node.js** (LTS)
* **npm** ou **yarn**
* **Expo Go** (no celular) ou um emulador Android/iOS configurado

### 2. Instalação e Configuração
```bash

# Clone o repositório
git clone [https://github.com/gustavosantiagob2/grocify-expo.git](https://github.com/gustavosantiagob2/grocify-expo.git)

# Entre na pasta do projeto
cd grocify-expo

# Instale todas as dependências
npm install
````

### 3. Variáveis de Ambiente
Crie um arquivo **.env** na raiz do projeto e preencha com suas credenciais do Clerk e Neon DB:
```env
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=sua_chave_clerk
CLERK_SECRET_KEY=sua_secret_clerk
EXPO_PUBLIC_DATABASE_URL=sua_url_neon_postgres
````
### 4. Banco de Dados (Drizzle)

Sincronize o esquema do banco de dados e, opcionalmente, popule com dados de teste para visualizar o app em funcionamento imediatamente:

```bash
# Sincroniza o schema local com o banco de dados remoto (Neon DB)
npm run db:push

# (Opcional) Popula o banco com dados iniciais (Seed)
npm run db:seed

# Para visualizar e editar os dados através do navegador
npm run db:studio

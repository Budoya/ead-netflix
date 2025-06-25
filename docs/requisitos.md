# ✅ Requisitos do Projeto

Este documento descreve os requisitos iniciais para o desenvolvimento da plataforma de cursos. A estrutura está dividida por módulo, contemplando as responsabilidades do painel administrativo, back-end e front-end.

---

## 🛠️ Painel Administrativo

Funcionalidades exclusivas para administradores:

- Gerenciar categorias (criar, editar, excluir)
- Gerenciar cursos (criar, editar, excluir)
- Subir episódios de vídeo para cada curso
- Destacar cursos ou categorias na página inicial

---

## 🔧 Back-End

Funcionalidades e responsabilidades da API e regras de negócio:

- **Autenticação de usuários**
  - Registro e login
  - Diferenciação entre perfil de usuário comum e administrador
- **Gerenciamento de perfis de usuário**
  - Visualizar e editar dados pessoais
- **Listagem de cursos com filtros e agrupamentos:**
  - Por categoria
  - Destaques
  - Lançamentos
  - Termo de pesquisa
  - “Minha lista” (favoritos do usuário)
  - Mais populares
  - Continuar assistindo
- **Streaming de episódios**
  - Visualização segura dos vídeos
- **Gerenciamento de contas de usuário**
  - Dados, progresso e listas salvas

---

## 🎨 Front-End

Interface e interação com o usuário:

- Página inicial (landing page)
- Registro de novo usuário
- Login (autenticação)
- Tela inicial com listas de cursos agrupadas
- Página de pesquisa e exibição dos resultados
- Página de detalhes do curso (com lista de episódios)
- Tela de player para assistir episódios
- Página de perfil do usuário (visualizar e atualizar informações)

---

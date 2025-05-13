# PLANNING.MD - MVP Reputa Fácil

**Projeto:** Reputa Fácil - SAAS de Gestão de Reputação Online
**Tecnologias Principais:** Next.js (React, App Router, TypeScript), Supabase (Auth, DB), Tailwind CSS, Google My Business API
**Objetivo do MVP:** Permitir que usuários (donos de pequenos negócios) conectem sua conta do Google Meu Negócio (GMN) para visualizar todas as suas avaliações em um dashboard unificado, com uma análise de sentimento básica. Foco em SEO para a landing page e lançamento rápido.
**Desenvolvedor:** Solo, com auxílio de IA.

---

## Fase 0: Preparação e Configuração Inicial

**Objetivo:** Configurar o ambiente de desenvolvimento e as ferramentas básicas.

*   **Tarefa 0.1: Criação do Projeto Next.js**
    *   [ ] Criar novo projeto Next.js com TypeScript e App Router: `npx create-next-app@latest reputa-facil --typescript --tailwind --eslint --app`
    *   [ ] Inicializar repositório Git.
    *   [ ] Primeiro commit: "Initial project setup with Next.js, TypeScript, Tailwind".

*   **Tarefa 0.2: Configuração do Supabase**
    *   [ ] Criar um novo projeto no Supabase.
    *   [ ] Salvar as chaves de API (URL do Projeto e Chave Anon Pública, Chave Service Role) de forma segura.
    *   [ ] Configurar variáveis de ambiente no Next.js (`.env.local`):
        *   `NEXT_PUBLIC_SUPABASE_URL`
        *   `NEXT_PUBLIC_SUPABASE_ANON_KEY`
        *   `SUPABASE_SERVICE_ROLE_KEY` (para uso em API routes seguras, se necessário)
    *   [ ] Instalar cliente Supabase: `npm install @supabase/supabase-js @supabase/auth-helpers-nextjs`
    *   [ ] Criar helper/client Supabase em `lib/supabaseClient.ts` (ou `lib/supabase/client.ts` e `lib/supabase/server.ts` usando auth-helpers).

*   **Tarefa 0.3: Estrutura de Pastas e Layout Básico**
    *   [ ] Definir estrutura de pastas inicial: `app/`, `components/`, `lib/`, `app/api/`.
    *   [ ] Criar componente `components/Header.tsx`.
    *   [ ] Criar componente `components/Footer.tsx`.
    *   [ ] Implementar o layout principal em `app/layout.tsx` usando Header e Footer.

---

## Fase 1: Autenticação de Usuários

**Objetivo:** Permitir que usuários se cadastrem, façam login e logout.

*   **Tarefa 1.1: Página de Autenticação (Login/Cadastro)**
    *   [ ] Criar rota e componente `app/auth/page.tsx`.
    *   [ ] Implementar formulário de Login (email/senha) com Supabase `signInWithPassword`.
    *   [ ] Implementar formulário de Cadastro (email/senha) com Supabase `signUp`.
    *   [ ] Implementar Login com Google (OAuth) com Supabase `signInWithOAuth`.
        *   [ ] Configurar provedor OAuth do Google no Supabase.
        *   [ ] Configurar Client ID e Client Secret do Google nas variáveis de ambiente e no Supabase.
    *   [ ] Redirecionar para `/dashboard` após sucesso.
    *   [ ] Exibir mensagens de erro/sucesso.

*   **Tarefa 1.2: Proteção de Rotas (Middleware)**
    *   [ ] Criar `middleware.ts` na raiz do projeto.
    *   [ ] Usar `@supabase/auth-helpers-nextjs` para verificar sessão.
    *   [ ] Redirecionar usuários não autenticados de rotas protegidas (ex: `/dashboard`) para `/auth`.
    *   [ ] Definir `matcher` para aplicar o middleware corretamente.

*   **Tarefa 1.3: Funcionalidade de Logout**
    *   [ ] Adicionar botão/link "Sair" no `Header.tsx` (visível apenas para usuários logados).
    *   [ ] Implementar Supabase `signOut`.
    *   [ ] Redirecionar para `/auth` após logout.

*   **Tarefa 1.4: Hook de Usuário (Opcional, mas recomendado)**
    *   [ ] Criar hook customizado `hooks/useAuth.ts` ou `lib/auth.ts` para facilmente acessar dados do usuário e estado de autenticação em componentes cliente. (Supabase auth-helpers já pode prover isso).

---

## Fase 2: Landing Page (Foco em SEO)

**Objetivo:** Criar uma página inicial atraente que explique a proposta de valor e seja otimizada para mecanismos de busca.

*   **Tarefa 2.1: Conteúdo e Estrutura da Landing Page**
    *   [ ] Criar/Atualizar `app/page.tsx`.
    *   [ ] Definir `metadata` (título, descrição, keywords) para SEO.
    *   [ ] Escrever copy (textos) focados nas dores e soluções (H1, seções de problema/solução/benefícios).
    *   [ ] Adicionar CTAs claros para `/auth`.
    *   [ ] (Opcional MVP) Seção FAQ simples.

*   **Tarefa 2.2: Design e Responsividade**
    *   [ ] Estilizar a landing page com Tailwind CSS.
    *   [ ] Garantir responsividade em diferentes tamanhos de tela.

*   **Tarefa 2.3: Otimização de Imagens**
    *   [ ] Usar o componente `<Image>` do `next/image` para imagens.
    *   [ ] Otimizar tamanho e formato das imagens.

---

## Fase 3: Integração com Google Meu Negócio (GMN) e Dashboard

**Objetivo:** Permitir que usuários conectem suas contas GMN e visualizem suas avaliações.

*   **Tarefa 3.1: Estrutura do Banco de Dados Supabase**
    *   [ ] Criar tabela `reviews` no Supabase (SQL schema: id, user_id, establishment_id, review_id_gmn, reviewer_name, rating, comment, publish_time, sentiment, etc.).
    *   [ ] Criar tabela `gmn_connections` no Supabase para armazenar tokens OAuth do GMN (user_id, access_token, refresh_token, expires_at).
    *   [ ] Configurar RLS (Row Level Security) para ambas as tabelas.

*   **Tarefa 3.2: Fluxo de Conexão GMN (OAuth)**
    *   [ ] Criar API Route `app/api/gmn/auth/route.ts` (ou similar) para iniciar o fluxo OAuth do Google, redirecionando para a URL de consentimento do Google.
    *   [ ] Criar API Route `app/api/gmn/callback/route.ts` para:
        *   Receber o `code` de autorização do Google.
        *   Trocar o `code` por `access_token` e `refresh_token`.
        *   Salvar/atualizar os tokens na tabela `gmn_connections` associados ao `user_id`.
        *   Redirecionar o usuário para o `/dashboard` com uma mensagem de sucesso/erro.

*   **Tarefa 3.3: Busca e Armazenamento de Avaliações GMN**
    *   [ ] Criar API Route `app/api/gmn/fetch-reviews/route.ts` (handler GET ou POST para acionar):
        *   Obter tokens GMN do usuário logado da tabela `gmn_connections`.
        *   Gerenciar refresh de token se necessário.
        *   Chamar a API do Google My Business para listar `accounts`, `locations` e, finalmente, `reviews`.
        *   Para cada review:
            *   Verificar se já existe na tabela `reviews` (por `review_id_gmn` e `user_id`).
            *   Se novo, calcular sentimento básico (baseado na nota).
            *   Salvar o novo review na tabela `reviews`.
        *   Retornar status da sincronização.

*   **Tarefa 3.4: Página do Dashboard**
    *   [ ] Criar rota e componente `app/dashboard/page.tsx` (Client Component).
    *   [ ] Se o usuário não conectou o GMN, mostrar botão "Conectar com Google Meu Negócio" (chama `app/api/gmn/auth/route.ts`).
    *   [ ] Se conectado, mostrar botão "Sincronizar Avaliações" (chama `app/api/gmn/fetch-reviews/route.ts`).
    *   [ ] Criar API Route `app/api/reviews/route.ts` (handler GET) para buscar os reviews do usuário logado da tabela `reviews` no Supabase.
    *   [ ] Exibir os reviews em uma lista/tabela no dashboard (nome, nota, comentário, data, sentimento).
    *   [ ] (Opcional MVP) Filtros básicos no cliente (por sentimento/nota).

---

## Fase 4: Finalização e Deploy do MVP

**Objetivo:** Preparar e lançar a primeira versão do produto.

*   **Tarefa 4.1: Testes Manuais**
    *   [ ] Testar todo o fluxo: cadastro, login, conexão GMN, sincronização, visualização de reviews, logout.
    *   [ ] Testar em diferentes navegadores e dispositivos (responsividade).

*   **Tarefa 4.2: Configuração de Analytics**
    *   [ ] Adicionar Google Analytics ou alternativa (Plausible, Umami) para rastrear uso.

*   **Tarefa 4.3: Preparação para Deploy**
    *   [ ] Verificar todas as variáveis de ambiente necessárias para produção.
    *   [ ] Revisar configurações de segurança (RLS Supabase, segredos de API).

*   **Tarefa 4.4: Deploy na Vercel**
    *   [ ] Conectar repositório GitHub à Vercel.
    *   [ ] Configurar variáveis de ambiente na Vercel.
    *   [ ] Realizar o deploy.
    *   [ ] (Opcional MVP) Configurar domínio customizado.

---

## Pós-Lançamento MVP (Ideias Futuras - Não para o MVP inicial)

*   [ ] Melhorar análise de sentimento (IA mais avançada).
*   [ ] Permitir respostas a reviews diretamente da plataforma.
*   [ ] Suporte a outras plataformas de avaliação (iFood, TripAdvisor).
*   [ ] Relatórios e insights mais detalhados.
*   [ ] Notificações para novos reviews.
*   [ ] Planos de assinatura.
---

Este `PLANNING.md` é um ponto de partida. Você pode detalhar ainda mais cada tarefa ou ajustá-la conforme avança. Ao interagir com a IA, você pode focar em uma tarefa por vez, fornecendo o contexto desta tarefa específica. Exemplo:

"Estou na **Tarefa 3.2: Fluxo de Conexão GMN (OAuth)** do meu projeto Reputa Fácil. Preciso criar a API Route `app/api/gmn/auth/route.ts` em Next.js que inicia o fluxo OAuth do Google. Ele deve construir a URL de autorização do Google com os scopes corretos para a GMB API e redirecionar o usuário para ela. Quais scopes eu preciso e como devo construir essa URL de forma segura?"
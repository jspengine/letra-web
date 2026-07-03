# Spec: dev-docs

> Updated: 2026-07-03

## Outcome

O desenvolvedor consegue:
1. Instalar e configurar o Letra em menos de 5 minutos
2. Entender os conceitos fundamentais (workspace, flow, gate, spec)
3. Criar seu primeiro workspace e executar um flow
4. Consultar referência completa de comandos e APIs
5. Encontrar guias para casos de uso comuns

## Constraints

- Documentação deve ser técnica, precisa e verificável
- Todos os exemplos devem ser testáveis
- Performance: LCP < 2.5s
- Acessível (WCAG 2.1 AA)
- SEO-friendly para descoberta orgânica

## Exclusions

- **NÃO** é uma documentação de design system (isso é brand-site)
- **NÃO** é um tutorial de programação genérico
- **NÃO** inclui documentação de código interno (só API pública)
- **NÃO** inclui troubleshoot avançado (v1 foca em getting started)

## Acceptance Criteria

- [x] **AC-1**: Página "Getting Started" com instruções de instalação passo-a-passo
- [x] **AC-2**: Seção "Core Concepts" com 5 conceitos fundamentais documentados
- [x] **AC-3**: CLI Reference com todos os comandos principais documentados
- [x] **AC-4**: Guia "First Workspace" com tutorial completo de criação
- [x] **AC-5**: Guia "Creating Flows" com exemplos de fluxos de trabalho
- [x] **AC-6**: Guia "Working with Gates" explicando aprovação humana
- [x] **AC-7**: API Reference para integrações (pelo menos 3 endpoints documentados)
- [x] **AC-8**: FAQ com 10+ perguntas frequentes
- [x] **AC-9**: Busca full-text por conteúdo
- [x] **AC-10**: Mobile responsivo (testado em 375px, 768px, 1024px)

## Context

A documentação técnica é essencial para adoção do Letra por desenvolvedores. Ela serve para:
- Reduzir barreira de entrada para novos usuários
- Estabelecer credibilidade técnica
- Diminuir suporte manual
- Melhorar SEO para termos técnicos relevantes

**Trade-offs considerados:**
- Docs estáticas vs. SPA → estáticas para performance e SEO
- Markdown vs. MDX → MDX para componentes interativos
- Uma página vs. múltiplas páginas → múltiplas para melhor organização
- Search client-side vs. server-side → client-side para simplicidade

# Spec: brand-site

> Updated: 2026-07-03

## Outcome

O visitante consegue:
1. Explorar o design system completo do Letra
2. Ver todos os componentes UI com exemplos interativos
3. Copiar tokens de design (cores, fontes, espaçamentos)
4. Baixar assets da marca (logos, ícones)
5. Entender a linguagem visual e padrões de uso

## Constraints

- Seguir brand-book.md como fonte da verdade
- Dark UI como base, Amber como acento
- Componentes devem ser reutilizáveis e documentados
- Performance: LCP < 2.5s
- Acessível (WCAG 2.1 AA)

## Exclusions

- **NÃO** é uma documentação de código (isso é dev-docs)
- **NÃO** é um editor de design (isso é Figma)
- **NÃO** inclui download do design system como pacote npm
- **NÃO** inclui personalização de temas

## Acceptance Criteria

- [x] **AC-1**: Página inicial com overview do design system e navegação por categorias
- [x] **AC-2**: Seção de cores com paleta completa, semântica e CSS variables
- [x] **AC-3**: Seção de tipografia com hierarquia, fontes e exemplos
- [x] **AC-4**: Seção de componentes com 10+ componentes documentados (Button, Card, Input, etc.)
- [x] **AC-5**: Cada componente com: descrição, variações, código de uso, preview interativo
- [x] **AC-6**: Seção de ícones com catalogo e guidelines de uso
- [x] **AC-7**: Seção de motion com guidelines de animação
- [x] **AC-8**: Download de assets (logos SVG, PNG) em diferentes formatos
- [x] **AC-9**: Mobile responsivo (testado em 375px, 768px, 1024px)
- [x] **AC-10**: Busca por componentes e tokens

## Context

O brand site é o showcase público do design system do Letra. Ele serve para:
- Mostrar a qualidade visual do produto para potenciais usuários
- Permitir que outros desenvolvedores usem o design system
- Estabelecer credibilidade técnica e visual
- Servir como referência para a equipe de design

**Trade-offs considerados:**
- Site estático vs. SPA → estático para performance e SEO
- Componentes interativos vs. screenshots → interativos para melhor experiência
- Download como pacote npm vs. assets avulsos → assets avulsos primeiro, npm depois

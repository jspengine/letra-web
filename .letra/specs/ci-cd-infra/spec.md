# Spec: ci-cd-infra

> Updated: 2026-07-03

## Outcome

O time consegue:
1. Versionar o projeto no GitHub
2. Executar CI automaticamente em cada PR (lint + build)
3. Fazer deploy automático na Vercel ao mergear na main
4. Ter preview URLs para cada PR
5. Gerenciar variáveis de ambiente via GitHub Secrets

## Constraints

- Usar GitHub Actions (gratuito)
- Deploy via Vercel (conta gratuita)
- Build deve passar antes de qualquer deploy
- Sem expor secrets no código
- CI deve rodar em < 3 minutos

## Exclusions

- **NÃO** inclui testes E2E ou integração
- **NÃO** inclui monitoramento de produção
- **NÃO** inclui configuração de DNS avançada
- **NÃO** inclui múltiplos ambientes (staging, dev)

## Acceptance Criteria

- [ ] **AC-1**: .gitignore configurado (node_modules, dist, .env, logs)
- [ ] **AC-2**: vercel.json configurado com rewrites para /brand, /docs, /blog
- [ ] **AC-3**: GitHub Actions workflow com build e validação
- [ ] **AC-4**: Deploy automático na Vercel via GitHub Actions
- [ ] **AC-5**: Primeiro commit feito e pronto para push
- [ ] **AC-6**: Documentação de setup para novos devs (VERCEL_TOKEN, secrets)

## Context

Automatizar CI/CD elimina erros manuais e acelera o ciclo de feedback. Com Vercel + GitHub Actions, cada PR gera preview URL automaticamente, permitindo revisão visual antes do deploy em produção.

**Trade-offs:**
- Vercel for GitHub (zero config) vs. GitHub Actions + Vercel CLI (mais controle) → GitHub Actions para visibilidade e controle do pipeline
- Deploy manual vs. automático → automático para velocidade, com CI gate para segurança

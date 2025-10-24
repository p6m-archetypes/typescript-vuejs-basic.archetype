# TypeScript Vue.js Application Archetype

![Latest Release](https://img.shields.io/github/v/release/p6m-archetypes/typescript-vuejs-basic.archetype?style=flat-square&label=Latest%20Release&color=blue)

Modern Vue.js 3 application with TypeScript, Composition API, and Kubernetes deployment ready.

## 🎯 What This Generates

- **⚡ Vue 3**: Progressive JavaScript framework with Composition API
- **🎨 TypeScript**: Full type safety with Vue TypeScript support
- **🔧 Vite**: Fast build tool with hot module replacement
- **🐳 Container-Ready**: Docker and Kubernetes manifests
- **🧪 Testing**: Vitest and Vue Test Utils configured

## 🚀 Quick Start

### Prerequisites

- [Archetect](https://archetect.github.io/) CLI tool
- Node.js 18+

### Generate & Run

```bash
archetect render https://github.com/p6m-archetypes/typescript-vuejs-basic.archetype.git#v1

cd customer-frontend
npm install
npm run dev
```

Access at: http://localhost:5173

## 📋 Configuration

| Property | Description | Example |
|----------|-------------|---------|
| `org-name` | GitHub organization or username | acme-inc |
| `project-title` | Application name | Customer Portal |
| `project-prefix` | Project identifier (suffix '-frontend' added automatically) | customer |

## ✨ Key Features

- **Composition API**: Modern reactive Vue development with `<script setup>`
- **TypeScript**: Full IDE support and type checking
- **Vite**: Lightning-fast HMR and builds
- **Vue Router**: Official routing library for SPAs
- **Pinia**: Official state management (optional)
- **Single File Components**: Template, script, and styles in one file

## 🎯 Use Cases

Ideal for:
1. **Single Page Applications**: Interactive web UIs with client-side routing
2. **Admin Dashboards**: Internal tools and data visualization
3. **Component Libraries**: Reusable Vue component packages
4. **Progressive Enhancement**: Incrementally adopt Vue in existing projects

## 🔌 Backend Integration

Typically consumes:
- **GraphQL APIs**: Unified gateway with flexible queries
- **REST APIs**: Traditional HTTP/JSON services
- **BFF Services**: Dedicated backend for this frontend

## 🔗 Related

- **[TypeScript Nuxt.js](../typescript-nuxtjs-basic.archetype)** - Vue with SSR
- **[TypeScript Next.js](../typescript-nextjs-basic.archetype)** - React with SSR
- **[TypeScript Svelte](../typescript-svelte-basic.archetype)** - Compiled framework

## 📄 License

MIT License

---

**Build reactive UIs with Vue 3!** 🚀

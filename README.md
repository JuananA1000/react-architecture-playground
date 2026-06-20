# React Architecture Playground

## Objetivo

Este proyecto tiene como objetivo aprender y comparar distintas arquitecturas frontend implementando exactamente la misma aplicación:

### Gestor de Biblioteca

Funcionalidades:

- Listar libros
- Añadir libros
- Eliminar libros
- Buscar libros

La idea es implementar la misma funcionalidad utilizando diferentes arquitecturas para entender:

- Cómo organizan el código
- Cómo gestionan las dependencias
- Cómo escalan
- Cuándo merece la pena utilizar cada una

---

# Arquitecturas incluidas

## 1. MVC (Model - View - Controller)

### ¿Qué es?

MVC separa la aplicación en tres responsabilidades:

- Model: datos y estado.
- View: interfaz de usuario.
- Controller: lógica de negocio y coordinación.

### Flujo

Usuario
↓
View
↓
Controller
↓
Model

### Ventajas

- Fácil de entender.
- Ideal para aprender separación de responsabilidades.
- Poco código.

### Inconvenientes

- Escala mal en aplicaciones grandes.
- El Controller puede convertirse en un punto central excesivamente complejo.

### Estructura

```bash
    mvc/
    │
    ├── MVCPage.jsx
    │
    ├── model/
    │   └── BookModel.js
    │
    ├── controller/
    │   └── BookController.js
    │
    └── view/
        ├── BookList.jsx
        ├── BookForm.jsx
        └── BookSearch.jsx
```
---

## 2. Modular Monolith

### ¿Qué es?

Organiza la aplicación por dominios o módulos.

Cada módulo contiene todo lo necesario para funcionar:

- Componentes
- Hooks
- Servicios
- Estado

### Ejemplo

- books
- authors
- categories

### Ventajas

- Muy utilizado en aplicaciones empresariales.
- Fácil de escalar.
- Buena separación entre dominios.

### Inconvenientes

- No fuerza separación estricta de dependencias.
- Puede degenerar en una estructura caótica si no se controla.

### Estructura

```bash
modular/
│
├── ModularPage.jsx
│
├── modules/
│
│   ├── books/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── store/
│   │
│   ├── authors/
│   │
│   └── categories/
│
└── shared/
```
[PEGAR ESQUEMA MODULAR AQUÍ]

---

## 3. Hexagonal Architecture

### ¿Qué es?

También conocida como:

- Ports and Adapters Architecture

El objetivo es aislar completamente el dominio de la infraestructura.

### Conceptos principales

Dominio
↓
Puertos
↓
Adaptadores

### Adaptadores

Primary Adapters

- React
- REST
- CLI

Secondary Adapters

- APIs
- Bases de datos
- LocalStorage

### Ventajas

- Dominio independiente.
- Muy fácil sustituir infraestructura.

### Inconvenientes

- Más compleja.
- Puede parecer excesiva en proyectos pequeños.

### Estructura

```bash
hexagonal/
│
├── HexagonalPage.jsx
│
├── domain/
│   ├── Book.js
│   └── BookService.js
│
├── ports/
│   └── BookRepositoryPort.js
│
├── adapters/
│   │
│   ├── primary/
│   │   └── react/
│   │       ├── BookForm.jsx
│   │       ├── BookList.jsx
│   │       └── BookSearch.jsx
│   │
│   └── secondary/
│       └── repositories/
│           └── InMemoryBookRepository.js
│
└── application/
    └── useBooks.js
```
---

## 4. Clean Architecture

### ¿Qué es?

Arquitectura propuesta por Robert C. Martin (Uncle Bob).

Su principio fundamental:

Las dependencias siempre apuntan hacia el dominio.

### Capas

Presentation
↓
Application
↓
Domain
↑
Infrastructure

### Conceptos principales

Entities

Representan el negocio.

Use Cases

Representan acciones del usuario.

Repositories

Abstracciones para acceder a datos.

### Ventajas

- Muy mantenible.
- Muy testeable.
- Excelente para aplicaciones complejas.

### Inconvenientes

- Bastante código.
- Curva de aprendizaje elevada.

### Estructura

```bash
clean/
│
├── CleanPage.jsx
│
├── domain/
│   ├── entities/
│   └── repositories/
│
├── application/
│   └── useCases/
│
├── infrastructure/
│   └── repositories/
│
└── presentation/
    ├── components/
    └── hooks/
```
---

## 5. Feature-Sliced Design (FSD)

### ¿Qué es?

Arquitectura moderna diseñada específicamente para frontend.

No organiza por capas.

Organiza por responsabilidad funcional.

### Capas principales

app
pages
widgets
features
entities
shared

### Conceptos

Entities

Objetos de negocio.

Features

Acciones del usuario.

Widgets

Bloques de interfaz reutilizables.

Pages

Páginas completas.

### Ventajas

- Excelente escalabilidad.
- Muy popular actualmente en React.

### Inconvenientes

- Requiere disciplina.
- Puede parecer compleja al principio.

### Estructura

```bash
fsd/
│
├── app/
│
├── pages/
│
├── widgets/
│
├── features/
│   ├── add-book/
│   ├── delete-book/
│   └── search-book/
│
├── entities/
│   └── book/
│
└── shared/
```

---

## 6. Microfrontends

### ¿Qué es?

Arquitectura donde una aplicación se divide en múltiples aplicaciones frontend independientes.

Cada equipo puede desarrollar y desplegar su propio frontend.

### Ejemplo

Shell
├── Books App
├── Authors App
└── Categories App

### Objetivo

Escalabilidad organizacional.

### Ventajas

- Equipos independientes.
- Despliegues independientes.
- Gran escalabilidad.

### Inconvenientes

- Complejidad elevada.
- Comunicación entre aplicaciones.

### Estructura

```bash
microfrontends/
│
├── shell/
│   ├── MicrofrontendPage.jsx
│   └── routes.jsx
│
├── book-mf/
│   ├── components/
│   ├── services/
│   └── index.js
│
├── author-mf/
│   ├── components/
│   ├── services/
│   └── index.js
│
└── category-mf/
    ├── components/
    ├── services/
    └── index.js
```
---

# Comparativa rápida

| Arquitectura | Dificultad | Escalabilidad | Uso actual |
|--------------|------------|---------------|------------|
| MVC | Baja | Baja | Media |
| Modular Monolith | Media | Alta | Muy alta |
| Hexagonal | Media-Alta | Alta | Alta |
| Clean Architecture | Alta | Muy alta | Alta |
| Feature-Sliced Design | Media-Alta | Muy alta | Muy alta |
| Microfrontends | Muy alta | Extremadamente alta | Grandes organizaciones |

---

# Objetivo final

Al terminar este proyecto deberías ser capaz de responder:

- ¿Cómo organiza cada arquitectura el código?
- ¿Qué problemas intenta resolver?
- ¿Cuándo merece la pena utilizarla?
- ¿Qué ventajas e inconvenientes tiene?
- ¿Cuál encaja mejor según el tamaño y necesidades del proyecto?

El objetivo NO es decidir cuál es la mejor arquitectura.

El objetivo es comprender los trade-offs de cada una y aprender a elegir la más adecuada para cada contexto.
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

### 1.1. ¿Qué es?

MVC separa la aplicación en tres responsabilidades:

- Model: datos y estado.
- View: interfaz de usuario.
- Controller: lógica de negocio y coordinación.

### 1.2. Flujo

Usuario
↓
View
↓
Controller
↓
Model

### 1.3. Ventajas

- Fácil de entender.
- Ideal para aprender separación de responsabilidades.
- Poco código.

### 1.4. Inconvenientes

- Escala mal en aplicaciones grandes.
- El Controller puede convertirse en un punto central excesivamente complejo.

### 1.5. Estructura de carpetas

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

### 2.1. ¿Qué es?

Organiza la aplicación por dominios o módulos.

Cada módulo contiene todo lo necesario para funcionar:

- Componentes
- Hooks
- Servicios
- Estado

### 2.2. Ejemplo

- books
- authors
- categories

### 2.3. Ventajas

- Muy utilizado en aplicaciones empresariales.
- Fácil de escalar.
- Buena separación entre dominios.

### 2.4. Inconvenientes

- No fuerza separación estricta de dependencias.
- Puede degenerar en una estructura caótica si no se controla.

### 2.5. Estructura de carpetas

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
---

## 3. Hexagonal Architecture

### 3.1. ¿Qué es?

También conocida como:

- Ports and Adapters Architecture

El objetivo es aislar completamente el dominio de la infraestructura.

### 3.2. Conceptos principales

Dominio
↓
Puertos
↓
Adaptadores

### 3.3. Adaptadores

Primary Adapters

- React
- REST
- CLI

Secondary Adapters

- APIs
- Bases de datos
- LocalStorage

### 3.4. Ventajas

- Dominio independiente.
- Muy fácil sustituir infraestructura.

### 3.5. Inconvenientes

- Más compleja.
- Puede parecer excesiva en proyectos pequeños.

### 3.6. Estructura de carpetas

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

### 4.1. ¿Qué es?

Arquitectura propuesta por Robert C. Martin (Uncle Bob).

Su principio fundamental:

Las dependencias siempre apuntan hacia el dominio.

### 4.2. Capas

Presentation
↓
Application
↓
Domain
↑
Infrastructure

### 4.3. Conceptos principales

Entities

Representan el negocio.

Use Cases

Representan acciones del usuario.

Repositories

Abstracciones para acceder a datos.

### 4.4. Ventajas

- Muy mantenible.
- Muy testeable.
- Excelente para aplicaciones complejas.

### 4.5. Inconvenientes

- Bastante código.
- Curva de aprendizaje elevada.

### 4.6. Estructura de carpetas

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

### 5.1. ¿Qué es?

Arquitectura moderna diseñada específicamente para frontend.

No organiza por capas.

Organiza por responsabilidad funcional.

### 5.2. Capas principales

app
pages
widgets
features
entities
shared

### 5.3. Conceptos

Entities

Objetos de negocio.

Features

Acciones del usuario.

Widgets

Bloques de interfaz reutilizables.

Pages

Páginas completas.

### 5.4. Ventajas

- Excelente escalabilidad.
- Muy popular actualmente en React.

### 5.5. Inconvenientes

- Requiere disciplina.
- Puede parecer compleja al principio.

### 5.6. Estructura de carpetas

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

### 6.1. ¿Qué es?

Arquitectura donde una aplicación se divide en múltiples aplicaciones frontend independientes.

Cada equipo puede desarrollar y desplegar su propio frontend.

### 6.2. Ejemplo

```bash
Shell
├── Books App
├── Authors App
└── Categories App
```

### 6.3. Objetivo

Escalabilidad organizacional.

### 6.4. Ventajas

- Equipos independientes.
- Despliegues independientes.
- Gran escalabilidad.

### 6.5. Inconvenientes

- Complejidad elevada.
- Comunicación entre aplicaciones.

### 6.6. Estructura

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
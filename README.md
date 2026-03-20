# challenge-qa-saucedemo
Automation Test Suite para Sauce Demo utilizando Playwright, Cucumber (BDD) y Page Object Model (POM)

# Sauce Demo Automation Challenge 
### Playwright + Cucumber + TypeScript

[English Version](#english-version) | [Versión en Español](#version-en-español)
---

## English Version

This project automates critical flows for the **Sauce Demo** platform, applying advanced design patterns and a testing mindset based on **ISTQB** standards.

### Project Architecture
The framework follows the **Page Object Model (POM)** pattern to decouple business logic from browser interaction:
* **Features (`.feature`):** Gherkin scenarios focused on user behavior.
* **Pages (`.ts`):** Page objects encapsulating **Playwright** selectors and actions.
* **Step Definitions (`.steps.ts`):** The bridge connecting Gherkin steps with automation code.
* **Common Steps:** Centralization of shared steps (DRY) to prevent ambiguity.

### Execution Instructions
1. **Prerequisites:** Ensure [Node.js](https://nodejs.org/) (v16+) is installed.
2. **Installation:** 
```bash
   npm install
   npx playwright install
```
3. **Run Tests** 
```bash
  npm test
```

4. **View Report**
```bash
  npm run report
```
Developed by : Mariangela Pacheco

---

## Version en Español

Este proyecto automatiza los flujos críticos de la plataforma **Sauce Demo**.

### Arquitectura del Proyecto
El framework sigue el patrón **Page Object Model (POM)** para separar la lógica de negocio de la interacción con el navegador:

* **Features (.feature):** Escenarios en Gherkin enfocados en el comportamiento del usuario.
* **Pages (.ts):** Objetos de página que encapsulan los selectores y acciones de **Playwright**.
* **Step Definitions (.steps.ts):** El puente que conecta los pasos de Gherkin con el código de automatización.
* **Common Steps:** Centralización de pasos compartidos (DRY) para evitar ambigüedades.

### Instrucciones de Ejecución

1. **Prerrequisitos**
   Asegúrate de tener instalado Node.js (v16 o superior).

2. **Instalación**
   ```bash
   npm install
   npx playwright install
    ```
3. **Ejecutar Tests**
```bash
   npm test
```
5. **Ver Reporte**
```bash
   npm run report
```

Desarrollado por: Mariangela Pacheco

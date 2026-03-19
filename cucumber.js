module.exports = {
  default: {

    requireModule: ['ts-node/register'],
    
    // Rutas donde Cucumber buscará el código
    require: [
      'src/step_definitions/**/*.ts',
      'src/support/**/*.ts'
    ],
    
    // Ruta de los archivos Gherkin
    paths: [
      'src/features/**/*.feature'
    ],
    
    // Formatos de salida (Consola + Reporte HTML)
    format: [
      'summary',
      'progress-bar',
      'html:reports/cucumber-report.html'
    ],
    
    // Configuración de reintentos y paralelismo
    retry: 0,
    parallel: 2, 
    
    
    worldParameters: {
      browserName: 'chromium',
      headless: true
    }
  }
}
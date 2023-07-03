module.exports = {
	// Diretórios onde estão localizados os arquivos de teste
	roots: ['<rootDir>/tests'],
  
	// Extensões de arquivos suportadas para os testes
	testRegex: '\\.test\\.js$',
  
	// Transforma os arquivos de teste usando o Babel
	transform: {
		'^.+\\.js$': 'babel-jest',
	},
	
	// Gera relatŕios de testes em HTML
	reporters: [
		'default',
		['jest-html-reporter', {
			pageTitle: 'Relatório de Testes',
			outputPath: './reports/test-report.html',
			includeFailureMsg: true
		}]
	]  
}

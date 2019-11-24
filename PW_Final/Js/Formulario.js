var valorTotal =0;
function salvar(){
	document.geteElementById('txtNomeCliente').value = document.geteElementById('txtNomeCliente');




	var i=0;
	while(i<document.formVenda.rdEntrega.length){
		if(document.formVenda.rdEntrega[i].checked){
			break;
		}
		if(parseInt(document.formVenda.rdEntrega[i].value) == 1){
			document.geteElementById('txtEntregaSelec').value = 'Correios - entrega em 10 dias uteis'
		}
		else if(parseInt(document.formVenda.rdEntrega[i].value) == 2){
			document.geteElementById('txtEntregaSelec').value = 'Correios - entrega em 10 dias uteis'
		i++;
	}
}
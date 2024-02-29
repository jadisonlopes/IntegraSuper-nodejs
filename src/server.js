import app from './app';
import VendaContratoServico from './app/services/VendaContratoServico';

const v = new VendaContratoServico();
v.recuperar('152305').then(v => {console.log('Venda-recuperar', v)}).catch(c => {console.error(c)});

app.listen(3030); 

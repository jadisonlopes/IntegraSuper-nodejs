
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import ArquivoUtil from '../utils/ArquivosUtil';
import Base64Util from '../utils/Base64Util';

class AssinaturaContratoServico {
    assinar() {
        try {
            const content = ArquivoUtil.ler('modelo_contrato_palmasluz.docx');
    
        if (!content) {
            console.error('Erro: O conteúdo do arquivo é indefinido');
            return;
        }
    
        const zip = new PizZip(content);
        const doc = new Docxtemplater(zip);
    
        const data = {
            CONTRATO: '000001',
            NOME_CLIENTE: "Icaro Portela Pires",
            ENDERECO_CLIENTE: 'Rua G, n. 142, bairro Muchila, Feira de Santana-BA, CEP.: 44.005-352',
            CPF_CNPJ: 'CPF',
            NCPF_CNPJ: "001.002.003-04",
            DATA_PEDIDO: "01/01/2024",
            VALOR_TOTAL: "R$ 1.854.000,00",
            PRODUTO_01: "Produto Teste",
            NOME_FORMA_PAGAMENTO: "A VISTA",
            LOCAL_DATA_DE_PAGAMENTO: "Feira de Santana - BA 01/01/2024"
        };
    
        doc.render(data);
    
        const output = doc.getZip().generate({ type: 'nodebuffer' });
    
        ArquivoUtil.escrever(`contrato-${data.CONTRATO}.docx`, output);
    
        const base64 = Base64Util.recuperar(output);
    
      } catch (error) {
          console.error('Ocorreu um erro:', error);
      }
    }
}

export default AssinaturaContratoServico;
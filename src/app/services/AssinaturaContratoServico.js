
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import ImageModule from 'docxtemplater-image-module-free';
import ArquivoUtil from '../utils/ArquivosUtil';
import Base64Util from '../utils/Base64Util';
import VendaContratoServico from '../services/VendaContratoServico';

class AssinaturaContratoServico {
    async assinar({codigoVenda, assinaturaBase64}) {
        try {
            const content = ArquivoUtil.ler('modelo_contrato_palmasluz.docx');
    
        if (!content) {
            console.error('Erro: O conteúdo do arquivo é indefinido');
            return;
        }

        function base64DataURLToArrayBuffer(dataURL) {
            const base64Regex = /^data:image\/(png|jpg|svg|svg\+xml);base64,/;
            if (!base64Regex.test(dataURL)) {
                return false;
            }
            const stringBase64 = dataURL.replace(base64Regex, "");
            let binaryString;
            if (typeof window !== "undefined") {
                binaryString = window.atob(stringBase64);
            } else {
                binaryString = Buffer.from(stringBase64, 'base64').toString("binary");
            }
            const len = binaryString.length;
            const bytes = new Uint8Array(len);
            for (let i = 0; i < len; i++) {
                const ascii = binaryString.charCodeAt(i);
                bytes[i] = ascii;
            }
            return bytes.buffer;
        }

        const imageModule = new ImageModule({
            getImage: function (tagValue) {
                return base64DataURLToArrayBuffer(tagValue);
            },
            getSize: function (buffer) {
                return [300, 75];
            }
        });
    
        const zip = new PizZip(content);
        const doc = new Docxtemplater(zip, {
            modules: [imageModule],
        });

        const data = await new VendaContratoServico().recuperar(codigoVenda);
        const ASSINATURA_CLIENTE = `data:image/png;base64,${assinaturaBase64}`;
        
        doc.render({...data, ASSINATURA_CLIENTE });
    
        const output = doc.getZip().generate({ type: 'nodebuffer' });
    
        ArquivoUtil.escrever(`contrato-${data.CONTRATO}.docx`, output);
    
        const base64 = Base64Util.recuperar(output);
    
      } catch (error) {
          console.error('Ocorreu um erro:', error);
      }
    }
}

export default AssinaturaContratoServico;
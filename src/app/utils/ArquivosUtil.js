import fs from 'fs';
import path from 'path';

class ArquivoUtil {
    ler(urlArquivo) {
        return fs.readFileSync(path.resolve('src', 'docs', urlArquivo), 'binary');
    }

    escrever(urlArquivo, data) {
        fs.writeFileSync(path.resolve('src', 'docs', urlArquivo), data);
    }
}

export default new ArquivoUtil();
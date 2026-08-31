import fs from "fs";
import path from "path";

/**
 * Verifica se um arquivo de imagem já foi adicionado em /public.
 * Usado para trocar automaticamente o placeholder cinza pela foto real
 * assim que o arquivo for salvo na pasta correta — sem precisar editar
 * nenhum componente.
 *
 * @param relativePath caminho a partir de /public, ex: "/images/sunshine-kids-run-capa.webp"
 */
export function hasPublicImage(relativePath: string): boolean {
  try {
    const fullPath = path.join(process.cwd(), "public", relativePath);
    return fs.existsSync(fullPath);
  } catch {
    return false;
  }
}

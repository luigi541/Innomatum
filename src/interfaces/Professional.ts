export default interface Professional {
  id_servico: number;
  servico: { id: number; nome: string };
  id_profissionais: number;
  nome: string;
  numero: number;
  local: string;
  cidade: string;
  imagem_url: string;
}
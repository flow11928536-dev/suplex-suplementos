'use client'

import { Header } from '@/components/store/header'
import { Footer } from '@/components/store/footer'
import { ChevronRight } from 'lucide-react'

export default function TermsPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl font-black text-gray-900 mb-6">Termos de Uso</h1>
        <div className="prose prose-sm max-w-none text-gray-700 space-y-4">
          <p><strong>Última atualização:</strong> Junho de 2026</p>
          <h2 className="text-xl font-bold text-gray-900">1. Aceitação dos Termos</h2>
          <p>Ao acessar este site, você concorda com estes Termos de Uso. Se não concordar, não utilize o site.</p>
          <h2 className="text-xl font-bold text-gray-900">2. Natureza do Site</h2>
          <p>A Suplex Suplementos é um site de análise e comparativo de suplementos. Não vendemos produtos diretamente. Os links em nosso site direcionam para lojas parceiras (como o Mercado Livre), onde a compra é efetuada.</p>
          <h2 className="text-xl font-bold text-gray-900">3. Links de Afiliados</h2>
          <p>Este site utiliza links de afiliados. Podemos receber comissão por compras realizadas através dos nossos links, sem custo adicional para o consumidor. As informações sobre preços e disponibilidade são responsabilidade das lojas parceiras.</p>
          <h2 className="text-xl font-bold text-gray-900">4. Precisão das Informações</h2>
          <p>Esforçamo-nos para manter as informações atualizadas e precisas, mas não garantimos a ausência de erros. Preços e disponibilidade podem mudar sem aviso prévio. Sempre verifique as informações na loja parceira antes de finalizar a compra.</p>
          <h2 className="text-xl font-bold text-gray-900">5. Limitação de Responsabilidade</h2>
          <p>A Suplex Suplementos não se responsabiliza por danos decorrentes do uso de produtos comprados através dos links em nosso site. Para questões sobre produtos, entre em contato com a loja parceira.</p>
          <h2 className="text-xl font-bold text-gray-900">6. Propriedade Intelectual</h2>
          <p>Todo o conteúdo deste site (textos, imagens, logotipos) é protegido por direitos autorais. A reprodução sem autorização é proibida.</p>
          <h2 className="text-xl font-bold text-gray-900">7. Contato</h2>
          <p>Em caso de dúvidas, entre em contato pelo e-mail falcao_21@msn.com.</p>
        </div>
      </div>
      <Footer />
    </>
  )
}

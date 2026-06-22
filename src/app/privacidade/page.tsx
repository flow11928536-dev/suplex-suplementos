'use client'

import { Header } from '@/components/store/header'
import { Footer } from '@/components/store/footer'
import { ChevronRight } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl font-black text-gray-900 mb-6">Política de Privacidade</h1>
        <div className="prose prose-sm max-w-none text-gray-700 space-y-4">
          <p><strong>Última atualização:</strong> Junho de 2026</p>
          <h2 className="text-xl font-bold text-gray-900">1. Introdução</h2>
          <p>A Suplex Suplementos respeita a privacidade de seus visitantes. Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações.</p>
          <h2 className="text-xl font-bold text-gray-900">2. Informações Coletadas</h2>
          <p>Coletamos apenas as informações que você nos fornece voluntariamente, como nome e e-mail ao se inscrever em nossa newsletter. Também utilizamos cookies para melhorar sua experiência.</p>
          <h2 className="text-xl font-bold text-gray-900">3. Uso de Cookies</h2>
          <p>Utilizamos cookies para analisar o tráfego do site, personalizar conteúdo e anúncios, e melhorar a experiência do usuário. Você pode desativar os cookies nas configurações do seu navegador.</p>
          <h2 className="text-xl font-bold text-gray-900">4. Links de Afiliados</h2>
          <p>Este site contém links de afiliados. Quando você clica em um link de afiliado e realiza uma compra, podemos receber uma comissão, sem custo adicional para você. Isso nos ajuda a manter o site funcionando.</p>
          <h2 className="text-xl font-bold text-gray-900">5. Compartilhamento de Dados</h2>
          <p>Não vendemos nem compartilhamos suas informações pessoais com terceiros, exceto quando exigido por lei.</p>
          <h2 className="text-xl font-bold text-gray-900">6. Seus Direitos (LGPD)</h2>
          <p>Você tem o direito de acessar, corrigir ou excluir seus dados pessoais. Para exercer esses direitos, entre em contato através do e-mail falcao_21@msn.com.</p>
          <h2 className="text-xl font-bold text-gray-900">7. Contato</h2>
          <p>Em caso de dúvidas sobre esta política, entre em contato pelo e-mail falcao_21@msn.com.</p>
        </div>
      </div>
      <Footer />
    </>
  )
}

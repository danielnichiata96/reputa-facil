import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Sua reputação online simplificada
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Conecte sua conta do Google Meu Negócio para visualizar todas as suas avaliações 
              em um dashboard unificado com análise de sentimento.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/auth"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Começar agora
              </Link>
              <a href="#saiba-mais" className="text-sm font-semibold leading-6 text-gray-900">
                Saiba mais <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div id="saiba-mais" className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Gestão simplificada</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Tudo o que você precisa para gerenciar sua reputação online
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Reputa Fácil reúne todas as suas avaliações do Google Meu Negócio em um único lugar, 
              com insights valiosos e ferramentas para crescer seu negócio.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                    </svg>
                  </div>
                  Dashboard Unificado
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Visualize todas as suas avaliações do Google Meu Negócio em um único dashboard intuitivo e fácil de usar.
                </dd>
              </div>

              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  </div>
                  Análise de Sentimento
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Entenda a opinião dos seus clientes com nossa análise de sentimento básica que classifica automaticamente os comentários.
                </dd>
              </div>

              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                  </div>
                  Configuração Simples
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Conecte sua conta do Google Meu Negócio em apenas alguns cliques e comece a monitorar sua reputação instantaneamente.
                </dd>
              </div>

              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
                    </svg>
                  </div>
                  Focado em Pequenos Negócios
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Desenvolvido especialmente para atender às necessidades de pequenos negócios que precisam gerenciar sua presença online.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* FAQ section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">FAQ</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Perguntas Frequentes
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl divide-y divide-gray-200">
            <div className="py-6">
              <h3 className="text-lg font-medium text-gray-900">O que é o Reputa Fácil?</h3>
              <p className="mt-3 text-base text-gray-600">
                Reputa Fácil é uma plataforma SAAS que permite que pequenos negócios conectem suas contas do Google Meu Negócio para visualizar todas as suas avaliações em um dashboard unificado com análise de sentimento básica.
              </p>
            </div>
            <div className="py-6">
              <h3 className="text-lg font-medium text-gray-900">Como funciona a conexão com o Google Meu Negócio?</h3>
              <p className="mt-3 text-base text-gray-600">
                Após criar sua conta no Reputa Fácil, você será guiado pelo processo de autorização do Google, que permite que nossa plataforma acesse suas avaliações do Google Meu Negócio de forma segura.
              </p>
            </div>
            <div className="py-6">
              <h3 className="text-lg font-medium text-gray-900">O Reputa Fácil é gratuito?</h3>
              <p className="mt-3 text-base text-gray-600">
                O Reputa Fácil oferece uma versão gratuita com funcionalidades limitadas. Para acesso a recursos avançados, oferecemos planos pagos com preços acessíveis para pequenos negócios.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-indigo-600">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-indigo-600 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Pronto para melhorar a reputação do seu negócio?
              </h2>
              <p className="mt-6 text-lg leading-8 text-indigo-200">
                Comece hoje mesmo a monitorar e gerenciar as avaliações do seu negócio.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <Link
                  href="/auth"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Começar grátis
                </Link>
                <a href="#saiba-mais" className="text-sm font-semibold leading-6 text-white">
                  Saiba mais <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
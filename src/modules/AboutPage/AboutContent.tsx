'use client'

import { useEffect } from 'react'

import { Card } from '@/components/ui/card'
import { trackEvent } from '@/lib/firebase'

export const AboutContent = () => {
  useEffect(() => {
    trackEvent('view about page')
  }, [])

  return (
    <div className="w-full flex flex-col gap-4">
      <p className="mb-4">
        <b>Juat Ask</b> is a platform for you to use collect questions from
        friends or anyone anonymously. No there is a single attribute that can
        indicate who submitted the application these questions, so that the
        privacy of the person asking is more guaranteed.<b>Juat Ask</b> does not
        provide a place to answer the questions asked, then usually you can
        share it on social media and answer the question there.
      </p>

      <p className="mb-4">
        <b>Juat Ask</b>is a project with open source code and can studied at{' '}
        <a
          href="https://github.com/mazipan/tanyaaja"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          github.com/mazipan/tanyaaja
        </a>
        , You are free to learn or even deploy for your benefit yourself, but it
        is not recommended for commercial purposes.
      </p>

      <Card className="mb-4 p-4 flex justify-between items-center">
        <a
          href="https://github.com/mazipan/tanyaaja"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          <h3 className="text-xl font-bold tracking-tight">mazipan/TanyaAja</h3>
        </a>
        <img
          src="https://img.shields.io/github/stars/mazipan/tanyaaja?style=social"
          alt="Github Star"
          loading="lazy"
        />
      </Card>

      <p className="mb-4">
        To continue to support <b>Juat Ask</b>, you can send funds to buy coffee
        via{' '}
        <a
          href="https://mazipan.space/support"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          donation page
        </a>
      </p>

      <p className="mb-4">
        Pertanyaan tentang platform <b>TanyaAja</b>, dapat ditujukan ke
        tanyaajaapp@gmail.com
      </p>

      <p className="mb-4">
        <small>
          <i>Last updated on September 18, 2023</i>
        </small>
      </p>
    </div>
  )
}

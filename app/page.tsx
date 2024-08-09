import React from "react"
import { Button } from "./_components/ui/button"
import Header from "./_components/header"
import Image from "next/image"
import { SearchIcon } from "lucide-react"
import { Input } from "./_components/ui/input"

const Home = () => {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Convidado!</h2>
        <p>Segunda-feira, 05 de dezembro</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="agendamento"
            src="/public/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Home

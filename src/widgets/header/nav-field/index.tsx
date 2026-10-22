import { Button } from '@/shared'
import Link from "next/link"

export const NavField = () => {
    return (
        <nav className="flex flex-wrap items-center justify-center">
          <Button variant={"link"} className={"px-4 py-8"}>
            <Link href="/">List</Link>
          </Button>
          <Button variant={"link"} className={"px-4 py-8"}>
            <Link href="/admin">Panel</Link>
          </Button>
        </nav>
    )
}
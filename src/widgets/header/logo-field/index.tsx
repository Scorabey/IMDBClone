import Link from "next/link"
import { LogoIpsum } from "@/shared"

export const LogoField = () => {
    return (
        <div>
          <Link href="/">
            <LogoIpsum className={"w-40 h-6"} />
          </Link>
        </div>
    )
}
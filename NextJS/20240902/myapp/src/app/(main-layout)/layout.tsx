import { ReactNode } from "react"

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      공통 메인 레이아웃
      {children}
    </div>
  )
}

export default layout
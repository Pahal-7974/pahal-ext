import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { pathToRoot } from "../util/path"
import style from "./styles/navbar.scss"

const links = [
  ["Home", ""],
  ["Blog", "blog"],
  ["Pitch", "pitch"],
  ["Portfolio", "portfolio"],
  ["Side quests", "side-quests"],
]

const NavBar: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const base = pathToRoot(fileData.slug!)
  return (
    <nav class={`navbar ${displayClass ?? ""}`}>
      {links.map(([name, path]) => (
        <a href={`${base}/${path}`} class="internal">{name}</a>
      ))}
    </nav>
  )
}
NavBar.css = style
export default (() => NavBar) satisfies QuartzComponentConstructor

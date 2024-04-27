import Link from "next/link";

const DesktopHeaderNavLinks = () => {
  return (
    <ul className="flex gap-6">
    <li className="nav-link">
      <Link className="nav-link" href={'/marketplace'}>marketplace</Link>
    </li>
    <li className="nav-link">
      <Link className="nav-link" href={'/learn'}>learn</Link>
    </li>
    <li className="nav-link">
      <Link  href={'/community'}>community</Link>
    </li>
    <li className="nav-link">
      <Link  href={'/tools'}>tools</Link>
    </li>
  </ul>
  )
}

export default DesktopHeaderNavLinks;
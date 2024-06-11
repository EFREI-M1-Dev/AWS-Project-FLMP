/* icons */
import ChatBubble from './icons/ChatBubble'
import Clap from './icons/Clap'
import Notification from './icons/Notification'
import Save from './icons/Save'
import Search from './icons/Search'
import Write from './icons/Write'
import Filter from './icons/Filter'
import Trash from "./icons/Trash.tsx";

type IconMap = {
  [key: string]: React.FC<React.SVGProps<SVGSVGElement>>
}

const icons: IconMap = {
  clap: Clap,
  chat_bubble: ChatBubble,
  save: Save,
  notification: Notification,
  search: Search,
  write: Write,
  filter: Filter,
  trash: Trash
}

export default icons

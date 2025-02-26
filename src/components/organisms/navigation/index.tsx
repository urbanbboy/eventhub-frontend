import { NavigationItem } from "@/components/molecules/navigation-item"
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu"

const links: { to: string, text: string, private?: boolean }[] = [
  {
    to: '/services',
    text: 'Услуги',
    private: true
  },
  {
    to: '/about',
    text: 'О нас',
  },
  {
    to: '/portfolio',
    text: 'Портфолио',
    private: true
  },
  // {
  //     to: '/in-work',
  //     text: 'В работе',
  //     private: true
  // },
]

export const Navigation = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex space-x-3">
        {links.map((link) => (
                    
          <NavigationItem
            key={link.to}
            to={link.to}
            text={link.text}
          />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

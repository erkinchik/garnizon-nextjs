import NextLink, { LinkProps } from "next/link";
import { FC, HTMLProps, useCallback } from "react";

// interface FLinkProps
//   extends Omit<HTMLProps<HTMLAnchorElement>, "href" | "as">,
//     LinkProps {}
export const Link = () => {};
// export const Link: FC = ({
//   children,
//   href,
//   as,
//   replace,
//   scroll,
//   shallow,
//   passHref,
//   prefetch,
//   locale,
//   target,
//   ...anchorProps
// }) => {
//   const handleClick = useCallback(
//     (e) => {
//       if ((href as string).startsWith("#")) {
//         e.preventDefault();
//         const destination = document.getElementById(href?.substring(1));
//         if (destination) {
//           destination.scrollIntoView({
//             behavior: "smooth",
//           });
//         }
//       }
//     },
//     [href]
//   );
//   return (
//     <NextLink
//       href={href}
//       as={as}
//       replace={replace}
//       scroll={scroll}
//       shallow={shallow}
//       passHref={passHref}
//       prefetch={prefetch}
//       locale={locale}
//     >
//       <a
//         tabIndex={0}
//         target={target}
//         role="link"
//         onClick={handleClick}
//         onKeyDown={handleClick}
//         {...anchorProps}
//       >
//         {children}
//       </a>
//     </NextLink>
//   );
// };

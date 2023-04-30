import Link from "next/link";
import { useRouter } from "next/router";

import { Button, Text } from "../../components";

export const NavLink = ({ ...props }: Props) => {
  let { text, href } = props;

  const { pathname } = useRouter();

  const active = pathname === href;

  return (
    <Link href={href}>
      <Button
        active={active}
        height="1.15rem"
        width="100%"
        border="none"
        style={{ justifyContent: "flex-start" }}
      >
        <Text text=">" type="label" style={{ opacity: active ? "1" : "0" }} />
        <Text text={text} type="label" margin="0 0 0 0.25rem" />
      </Button>
    </Link>
  );
};

type Props = {
  text: string;
  href: string;
};

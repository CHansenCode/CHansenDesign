import { Text } from "../../components";

export function TextEditor(props: any) {
  return (
    <>
      <section>
        <Text type="subtitle" text="Stuff in me" />

        <Text text={dummyText} />
      </section>
    </>
  );
}

let dummyText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quaerat
corrupti aliquam voluptatibus, sapiente nemo autem nulla quos, animi
deserunt corporis harum praesentium! Sed dolorem numquam, rerum earum
vel necessitatibus, odit doloremque cupiditate placeat consequatur
quisquam porro officiis optio doloribus officia? Porro, hic eius dolorem
rem enim iusto dolores non nihil assumenda consectetur velit, aliquid
mollitia ipsam perspiciatis maxime perferendis! Totam, consequuntur
dicta quod commodi autem reiciendis exercitationem veritatis eaque hic
tempora repellat est iusto esse ex excepturi architecto eum.`;

import { AnimatedProseSection } from "@/components/AnimatedProseSection";
import Image from "next/image";

export default function Page() {
  return (
    <AnimatedProseSection>
      <Image
        src="/adam-1-transparent.png"
        alt="Photo of Adam Griffin"
        className="rounded-full bg-fuchsia-100 block mx-auto sm:mb-1
          sm:float-right"
        width={160}
        height={160}
        priority
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac elit
        tempus, suscipit eros a, gravida metus. Sed ac congue dui. Vivamus
        consectetur consectetur posuere. Morbi rhoncus odio diam. Sed ultricies
        risus risus, id vulputate purus luctus in. Donec ut molestie odio, vitae
        ultricies enim.
      </p>
      <p>
        In tempus volutpat iaculis. Donec felis turpis, dictum hendrerit mollis
        in, mollis non mi. Quisque ut lacus a sem ultrices dignissim. Ut
        malesuada purus in purus eleifend, et laoreet arcu varius. Mauris
        aliquet cursus magna, sit amet venenatis ex malesuada egestas. Quisque
        pharetra euismod nisl ut semper. Donec porttitor mattis augue, et
        posuere ligula ornare a. Suspendisse leo mi, mollis cursus tempus sit
        amet, lobortis ut quam. Curabitur sit amet dui augue.
      </p>
      <p>
        Etiam ante nisl, suscipit ac suscipit vitae, molestie quis elit. Nam
        auctor lacinia felis sed sollicitudin. Morbi vitae dignissim velit. Cras
        a nulla pharetra dui auctor lacinia. Nam laoreet diam vitae leo porta,
        et consequat quam viverra.
      </p>
    </AnimatedProseSection>
  );
}

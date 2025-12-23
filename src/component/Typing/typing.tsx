import { useEffect, useState } from "react";
import "./typing.css";


const texts = [
  "Lucas Dev",
  "314-u",
  "Piu",
  "Le314u"
];

function TypingEffect(props:any) {
  const [text, setText] = useState(props.text);
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const time = 2000

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), time);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setText(texts[index].substring(0, subIndex));
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return <>{text}<span className="cursor">|</span></>;
}


export default TypingEffect;
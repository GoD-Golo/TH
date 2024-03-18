export default function Footer() {
  return (
    <footer className="col-span-2 flex w-full flex-row justify-between bg-indigo-500 px-4 py-4 ">
      <address className="order-2 text-xs text-slate-50">
        Telefon: <a href={`tel:07557271800`}>07557271800</a>
        <br />
        Adresă:{` `}
        <a
          href="https://www.google.com/maps/place/Faculty+of+Mathematics+and+Computer+Science/@44.4355355,26.0970118,17z/data=!3m1!4b1!4m6!3m5!1s0x40b1ff472f47f047:0x493984726f0235f9!8m2!3d44.4355355!4d26.0995867!16s%2Fg%2F1td63tdh?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
        >
          !(Facultatea de matematică și informatică)
        </a>
        <br />
        Email:{` `}
        <a href={`mailto:inima_de_pumnal@gmail.com`}>
          inima_de_pumnal@gmail.com
        </a>
        <br />
        Chat:{` `}
        <a href={`https://wa.me/07557271800`}>WhatsApp</a>
      </address>
      <small className="flex h-full flex-col justify-between italic">
        <div className="text-xs text-slate-50">
          &copy; Gologan Alexandru-Dragos-Cristian. Toate drepturile rezervate.
          <br />
          <span>
            <time dateTime="2024-03-13">Data creării paginii: 13.03.2024</time>
          </span>
        </div>
        <span>
          <strong className="text-xs text-rose-900">
            Acesta este un proiect
          </strong>
        </span>
      </small>
    </footer>
  );
}

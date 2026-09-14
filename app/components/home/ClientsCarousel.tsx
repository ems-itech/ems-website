import Image from "next/image";

import styles from "@/page.module.css";

const clients = [
  { name: "HALA", logo: "/figma-home/client-1.png", className: styles.clientOne },
  { name: "Orange", logo: "/figma-home/client-2.png", className: styles.clientTwo },
  { name: "Thamanya", logo: "/figma-home/client-3.png", className: styles.clientThree },
  { name: "Liga Data", logo: "/figma-home/client-4.png", className: styles.clientFour },
  { name: "Wareef", logo: "/figma-home/client-5.png", className: styles.clientFive },
  { name: "ChalkTalk", logo: "/figma-home/client-6.png", className: styles.clientSix },
  { name: "Saudi Tourism Authority", logo: "/figma-home/client-7.png", className: styles.clientSeven },
  { name: "NHC", logo: "/figma-home/client-8.png", className: styles.clientEight },
  { name: "eSense", logo: "/esense.png", className: styles.clientWide },
  { name: "Saudi Central Bank", logo: "/bank.png", className: styles.clientWide },
  { name: "Rekaz", logo: "/rakaz.png", className: styles.clientWide },
  { name: "Wadaie", logo: "/wadaie.png", className: styles.clientWide },
];

export function ClientsCarousel() {
  return (
    <div className={styles.carousel} role="region" aria-label="EMS clients">
      <div className={styles.carouselViewport}>
        <div className={styles.carouselTrack}>
          {[false, true].map((isDuplicate) => (
            <div
              className={styles.carouselGroup}
              aria-hidden={isDuplicate || undefined}
              key={isDuplicate ? "duplicate" : "original"}
            >
              {clients.map((client) => (
                <div
                  className={`${styles.clientLogo} ${client.className}`}
                  key={client.name}
                >
                  <Image
                    src={client.logo}
                    alt={isDuplicate ? "" : client.name}
                    fill
                    sizes="180px"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";
import Subtitle from "@/app/components/customTags/Subtitle";
import { useLanguageStore } from "@/app/store/useLanguageStore";

const PrivacyPolicy = () => {
  const { lang } = useLanguageStore();

  const content = {
    de: {
      title: "Datenschutzerklärung",
      sections: {
        overview: {
          title: "1. Datenschutz auf einen Blick",
          general: {
            title: "Allgemeine Hinweise",
            text: "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.",
          },
          collection: {
            title: "Datenerfassung auf dieser Website",
            responsible: {
              title:
                "Wer ist verantwortlich für die Datenerfassung auf dieser Website?",
              text: "Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.",
            },
            how: {
              title: "Wie erfassen wir Ihre Daten?",
              text1:
                "Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.",
              text2:
                "Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.",
            },
            purpose: {
              title: "Wofür nutzen wir Ihre Daten?",
              text: "Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über die Website Verträge geschlossen oder angebahnt werden können, werden die übermittelten Daten auch für Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen verarbeitet.",
            },
            rights: {
              title: "Welche Rechte haben Sie bezüglich Ihrer Daten?",
              text1:
                "Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.",
              text2:
                "Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.",
            },
          },
        },
        hosting: {
          title: "2. Hosting",
          text1:
            "Wir hosten die Inhalte unserer Website bei folgendem Anbieter:",
          external: {
            title: "Externes Hosting",
            text1:
              "Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.",
            text2:
              "Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.",
            text3:
              "Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.",
            text4: "Wir setzen folgende(n) Hoster ein:",
            host: [
              "Vercel Inc",
              "650 California St",
              "San Francisco",
              "CA 94108",
              "US",
            ],
            processing: {
              title: "Auftragsverarbeitung",
              text: "Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.",
            },
          },
        },
        general: {
          title: "3. Allgemeine Hinweise und Pflichtinformationen",
          privacy: {
            title: "Datenschutz",
            text1:
              "Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.",
            text2:
              "Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.",
            text3:
              "Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.",
          },
          responsible: {
            title: "Hinweis zur verantwortlichen Stelle",
            text1:
              "Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:",
            address: [
              "Anna Schenk",
              "Rahmhügel 1",
              "97478 Knetzgau",
              "Deutschland",
            ],
            contact: [
              "Telefon: 015679 314176",
              "E-Mail: info@as-vision-partners.com",
            ],
            text2:
              "Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.",
          },
          storage: {
            title: "Speicherdauer",
            text: "Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.",
          },
          legalBasis: {
            title:
              "Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website",
            text: "Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzerklärung informiert.",
          },
          recipients: {
            title: "Empfänger von personenbezogenen Daten",
            text: "Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über gemeinsame Verarbeitung geschlossen.",
          },
          revocation: {
            title: "Widerruf Ihrer Einwilligung zur Datenverarbeitung",
            text: "Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.",
          },
          objection: {
            title:
              "Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)",
            text1:
              "WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).",
            text2:
              "WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).",
          },
          complaint: {
            title: "Beschwerderecht bei der zuständigen Aufsichtsbehörde",
            text: "Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.",
          },
          portability: {
            title: "Recht auf Datenübertragbarkeit",
            text: "Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.",
          },
          access: {
            title: "Auskunft, Berichtigung und Löschung",
            text: "Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.",
          },
          restriction: {
            title: "Recht auf Einschränkung der Verarbeitung",
            text1:
              "Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:",
            points: [
              "Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.",
              "Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.",
              "Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.",
              "Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.",
            ],
            text2:
              "Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.",
          },
          ssl: {
            title: "SSL- bzw. TLS-Verschlüsselung",
            text1:
              "Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.",
            text2:
              "Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.",
          },
        },
        dataCollection: {
          title: "4. Datenerfassung auf dieser Website",
          contactForm: {
            title: "Kontaktformular",
            text1:
              "Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.",
            text2:
              "Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.",
            text3:
              "Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.",
          },
          email: {
            title: "Anfrage per E-Mail, Telefon oder Telefax",
            text1:
              "Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.",
            text2:
              "Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.",
            text3:
              "Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.",
          },
          whatsapp: {
            title: "Kommunikation via WhatsApp",
            text1:
              "Für die Kommunikation mit unseren Kunden und sonstigen Dritten nutzen wir unter anderem den Instant-Messaging-Dienst WhatsApp. Anbieter ist die WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland.",
            text2:
              "Die Kommunikation erfolgt über eine Ende-zu-Ende-Verschlüsselung (Peer-to-Peer), die verhindert, dass WhatsApp oder sonstige Dritte Zugriff auf die Kommunikationsinhalte erlangen können. WhatsApp erhält jedoch Zugriff auf Metadaten, die im Zuge des Kommunikationsvorgangs entstehen (z. B. Absender, Empfänger und Zeitpunkt). Wir weisen ferner darauf hin, dass WhatsApp nach eigener Aussage, personenbezogene Daten seiner Nutzer mit seiner in den USA ansässigen Konzernmutter Meta teilt. Weitere Details zur Datenverarbeitung finden Sie in der Datenschutzrichtlinie von WhatsApp unter:",
            link1: "https://www.whatsapp.com/legal/#privacy-policy",
            text3:
              "Der Einsatz von WhatsApp erfolgt auf Grundlage unseres berechtigten Interesses an einer möglichst schnellen und effektiven Kommunikation mit Kunden, Interessenten und sonstigen Geschäfts- und Vertragspartnern (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Datenverarbeitung ausschließlich auf Grundlage der Einwilligung; diese ist jederzeit mit Wirkung für die Zukunft widerrufbar.",
            text4:
              "Die zwischen Ihnen und uns auf WhatsApp ausgetauschten Kommunikationsinhalte verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.",
            text5:
              "Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework“ (DPF). Der DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link:",
            link2: "https://www.dataprivacyframework.gov/participant/7735",
            text6: "Wir nutzen WhatsApp in der Variante  „WhatsApp Business“.",
            text7:
              "Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier:",
            link3:
              "https://www.whatsapp.com/legal/business-data-transfer-addendum.",
            text8:
              "Wir haben einen Vertrag über Auftragsverarbeitung (AVV) mit dem oben genannten Anbieter geschlossen.",
          },
          calendly: {
            title: "Calendly",
            text1:
              "Auf unserer Website haben Sie die Möglichkeit, Termine mit uns zu vereinbaren. Für die Terminbuchung nutzen wir das Tool „Calendly“. Anbieter ist die Calendly LLC, 271 17th St NW, 10th Floor, Atlanta, Georgia 30363, USA (nachfolgend „Calendly“).",
            text2:
              "Zum Zweck der Terminbuchung geben Sie die abgefragten Daten und den Wunschtermin in die dafür vorgesehene Maske ein. Die eingegebenen Daten werden für die Planung, Durchführung und ggf. für die Nachbereitung des Termins verwendet. Die Termindaten werden für uns auf den Servern von Calendly gespeichert, dessen Datenschutzerklärung Sie hier einsehen können:",
            link1: "https://calendly.com/privacy",
            text3:
              "Die von Ihnen eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt. Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.",
            text4:
              "Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an einer möglichst unkomplizierten Terminvereinbarung mit Interessenten und Kunden. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.",
            text5:
              "Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier:",
            link2: "https://calendly.com/pages/dpa",
            text6:
              "Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework“ (DPF). Der DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link:",
            link3: "https://www.dataprivacyframework.gov/participant/6050",
            processing: {
              title: "Auftragsverarbeitung",
              text: "Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.",
            },
          },
        },
        conference: {
          title: "5. Audio- und Videokonferenzen",
          processing: {
            title: "Datenverarbeitung",
            text1:
              "Für die Kommunikation mit unseren Kunden setzen wir unter anderen Online-Konferenz-Tools ein. Die im Einzelnen von uns genutzten Tools sind unten aufgelistet. Wenn Sie mit uns per Video- oder Audiokonferenz via Internet kommunizieren, werden Ihre personenbezogenen Daten von uns und dem Anbieter des jeweiligen Konferenz-Tools erfasst und verarbeitet.",
            text2:
              "Die Konferenz-Tools erfassen dabei alle Daten, die Sie zur Nutzung der Tools bereitstellen/einsetzen (E-Mail-Adresse und/oder Ihre Telefonnummer). Ferner verarbeiten die Konferenz-Tools die Dauer der Konferenz, Beginn und Ende (Zeit) der Teilnahme an der Konferenz, Anzahl der Teilnehmer und sonstige „Kontextinformationen“ im Zusammenhang mit dem Kommunikationsvorgang (Metadaten).",
            text3:
              "Des Weiteren verarbeitet der Anbieter des Tools alle technischen Daten, die zur Abhandlung der Online-Kommunikation erforderlich sind. Dies umfasst insbesondere IP-Adressen, MAC-Adressen, Geräte-IDs, Gerätetyp, Betriebssystemtyp und -version, Client-Version, Kameratyp, Mikrofon oder Lautsprecher sowie die Art der Verbindung.",
            text4:
              "Sofern innerhalb des Tools Inhalte ausgetauscht, hochgeladen oder in sonstiger Weise bereitgestellt werden, werden diese ebenfalls auf den Servern der Tool-Anbieter gespeichert. Zu solchen Inhalten zählen insbesondere Cloud-Aufzeichnungen, Chat-/Sofortnachrichten, Voicemails hochgeladene Fotos und Videos, Dateien, Whiteboards und andere Informationen, die während der Nutzung des Dienstes geteilt werden.",
            text5:
              "Bitte beachten Sie, dass wir nicht vollumfänglich Einfluss auf die Datenverarbeitungsvorgänge der verwendeten Tools haben. Unsere Möglichkeiten richten sich maßgeblich nach der Unternehmenspolitik des jeweiligen Anbieters. Weitere Hinweise zur Datenverarbeitung durch die Konferenztools entnehmen Sie den Datenschutzerklärungen der jeweils eingesetzten Tools, die wir unter diesem Text aufgeführt haben.",
          },
          purpose: {
            title: "Zweck und Rechtsgrundlagen",
            text: "Die Konferenz-Tools werden genutzt, um mit angehenden oder bestehenden Vertragspartnern zu kommunizieren oder bestimmte Leistungen gegenüber unseren Kunden anzubieten (Art. 6 Abs. 1 lit. b DSGVO). Des Weiteren dient der Einsatz der Tools der allgemeinen Vereinfachung und Beschleunigung der Kommunikation mit uns bzw. unserem Unternehmen (berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO). Soweit eine Einwilligung abgefragt wurde, erfolgt der Einsatz der betreffenden Tools auf Grundlage dieser Einwilligung; die Einwilligung ist jederzeit mit Wirkung für die Zukunft widerrufbar.",
          },
          storage: {
            title: "Speicherdauer",
            text1:
              "Die unmittelbar von uns über die Video- und Konferenz-Tools erfassten Daten werden von unseren Systemen gelöscht, sobald Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt. Gespeicherte Cookies verbleiben auf Ihrem Endgerät, bis Sie sie löschen. Zwingende gesetzliche Aufbewahrungsfristen bleiben unberührt.",
            text2:
              "Auf die Speicherdauer Ihrer Daten, die von den Betreibern der Konferenz-Tools zu eigenen Zwecken gespeichert werden, haben wir keinen Einfluss. Für Einzelheiten dazu informieren Sie sich bitte direkt bei den Betreibern der Konferenz-Tools.",
          },
          tools: {
            title: "Eingesetzte Konferenz-Tools",
            text: "Wir setzen folgende Konferenz-Tools ein:",
            googleMeet: {
              title: "Google Meet",
              text1:
                "Wir nutzen Google Meet. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Details zur Datenverarbeitung entnehmen Sie der Datenschutzerklärung von Google:",
              link1: "https://policies.google.com/privacy?hl=de",
              text2:
                "Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework“ (DPF). Der DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link:",
              link2: "https://www.dataprivacyframework.gov/participant/5780",
            },
          },
        },
        plugins: {
          title: "6. Plugins und Tools",
          googleFonts: {
            title: "Google Fonts (lokales Hosting)",
            text1:
              "Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google bereitgestellt werden. Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern von Google findet dabei nicht statt.",
            text2: "Weitere Informationen zu Google Fonts finden Sie unter",
            link1: "https://developers.google.com/fonts/faq",
            text3: "und in der Datenschutzerklärung von Google:",
            link2: "https://policies.google.com/privacy?hl=de",
          },
          source: {
            text: "Quelle:",
            link: "https://www.e-recht24.de",
          },
        },
      },
    },
    en: {
      title: "Privacy Policy",
      sections: {
        overview: {
          title: "1. Data Protection at a Glance",
          general: {
            title: "General Information",
            text: "The following information provides a simple overview of what happens to your personal data when you visit our website. Personal data is any data with which you can be personally identified. Detailed information on data protection can be found in our privacy policy listed below this text.",
          },
          collection: {
            title: "Data Collection on this Website",
            responsible: {
              title: "Who is responsible for data collection on this website?",
              text: 'The data processing on this website is carried out by the website operator. You can find their contact details in the section "Information about the responsible party" in this privacy policy.',
            },
            how: {
              title: "How do we collect your data?",
              text1:
                "On the one hand, your data is collected when you provide it to us. This can be, for example, data that you enter in a contact form.",
              text2:
                "Other data is collected automatically or after your consent when you visit the website by our IT systems. This is mainly technical data (e.g., internet browser, operating system, or time of page access). This data is collected automatically as soon as you enter this website.",
            },
            purpose: {
              title: "What do we use your data for?",
              text: "Some of the data is collected to ensure the proper functioning of the website. Other data can be used to analyze your user behavior. If contracts can be concluded or initiated via the website, the transmitted data will also be processed for contract offers, orders, or other inquiries.",
            },
            rights: {
              title: "What rights do you have regarding your data?",
              text1:
                "You have the right to receive information free of charge about the origin, recipient, and purpose of your stored personal data at any time. You also have the right to request the correction or deletion of this data. If you have given consent to data processing, you can revoke this consent at any time for the future. You also have the right, under certain circumstances, to request the restriction of the processing of your personal data. Furthermore, you have the right to lodge a complaint with the competent supervisory authority.",
              text2:
                "For this purpose, as well as for further questions on the subject of data protection, you can contact us at any time.",
            },
          },
        },
        hosting: {
          title: "2. Hosting",
          text1:
            "We host the content of our website with the following provider:",
          external: {
            title: "External Hosting",
            text1:
              "This website is hosted externally. The personal data collected on this website is stored on the servers of the host(s). This may include, but is not limited to, IP addresses, contact requests, meta and communication data, contract data, contact details, names, website accesses, and other data generated via a website.",
            text2:
              "External hosting is carried out for the purpose of fulfilling the contract with our potential and existing customers (Art. 6 para. 1 lit. b GDPR) and in the interest of a secure, fast, and efficient provision of our online offering by a professional provider (Art. 6 para. 1 lit. f GDPR). If a corresponding consent has been requested, the processing is carried out exclusively on the basis of Art. 6 para. 1 lit. a GDPR and § 25 para. 1 TTDSG, insofar as the consent includes the storage of cookies or access to information on the user's device (e.g., device fingerprinting) within the meaning of the TTDSG. The consent can be revoked at any time.",
            text3:
              "Our host(s) will only process your data to the extent necessary to fulfill their performance obligations and follow our instructions regarding this data.",
            text4: "We use the following host(s):",
            host: [
              "Vercel Inc",
              "650 California St",
              "San Francisco",
              "CA 94108",
              "US",
            ],
            processing: {
              title: "Order Processing",
              text: "We have concluded an order processing agreement (AVV) for the use of the above-mentioned service. This is a contract required by data protection law, which ensures that the service provider processes the personal data of our website visitors only in accordance with our instructions and in compliance with the GDPR.",
            },
          },
        },
        general: {
          title: "3. General Information and Mandatory Information",
          privacy: {
            title: "Data Protection",
            text1:
              "The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy.",
            text2:
              "When you use this website, various personal data are collected. Personal data is data with which you can be personally identified. This privacy policy explains what data we collect and what we use it for. It also explains how and for what purpose this happens.",
            text3:
              "We would like to point out that data transmission on the Internet (e.g., when communicating by e-mail) can have security gaps. Complete protection of data against access by third parties is not possible.",
          },
          responsible: {
            title: "Information about the responsible party",
            text1:
              "The responsible party for data processing on this website is:",
            address: [
              "Anna Schenk",
              "Rahmhügel 1",
              "97478 Knetzgau",
              "Germany",
            ],
            contact: [
              "Phone: +49 15679 314176",
              "Email: info@as-vision-partners.com",
            ],
            text2:
              "The responsible party is the natural or legal person who alone or jointly with others decides on the purposes and means of processing personal data (e.g., names, email addresses, etc.).",
          },
          storage: {
            title: "Storage Duration",
            text: "Unless a more specific storage period has been specified within this privacy policy, your personal data will remain with us until the purpose for the data processing no longer applies. If you assert a legitimate request for deletion or revoke your consent to data processing, your data will be deleted unless we have other legally permissible reasons for storing your personal data (e.g., tax or commercial retention periods); in the latter case, the deletion will take place after these reasons no longer apply.",
          },
          legalBasis: {
            title:
              "General Information on the Legal Basis for Data Processing on this Website",
            text: "If you have consented to data processing, we process your personal data on the basis of Art. 6 para. 1 lit. a GDPR or Art. 9 para. 2 lit. a GDPR, if special categories of data according to Art. 9 para. 1 GDPR are processed. In the case of explicit consent to the transfer of personal data to third countries, the data processing is also based on Art. 49 para. 1 lit. a GDPR. If you have consented to the storage of cookies or to the access to information on your device (e.g., via device fingerprinting), the data processing is additionally based on § 25 para. 1 TTDSG. The consent can be revoked at any time. If your data is required for the fulfillment of a contract or for the implementation of pre-contractual measures, we process your data on the basis of Art. 6 para. 1 lit. b GDPR. Furthermore, we process your data if this is necessary to fulfill a legal obligation on the basis of Art. 6 para. 1 lit. c GDPR. Data processing may also be carried out on the basis of our legitimate interest according to Art. 6 para. 1 lit. f GDPR. Information on the relevant legal basis in each individual case is provided in the following paragraphs of this privacy policy.",
          },
          recipients: {
            title: "Recipients of Personal Data",
            text: "In the course of our business activities, we work with various external parties. In some cases, this also requires the transfer of personal data to these external parties. We only pass on personal data to external parties if this is necessary for the fulfillment of a contract, if we are legally obliged to do so (e.g., transfer of data to tax authorities), if we have a legitimate interest in the transfer pursuant to Art. 6 para. 1 lit. f GDPR, or if another legal basis permits the data transfer. When using processors, we only pass on personal data of our customers on the basis of a valid contract for order processing. In the case of joint processing, a joint processing agreement is concluded.",
          },
          revocation: {
            title: "Revocation of Your Consent to Data Processing",
            text: "Many data processing operations are only possible with your express consent. You can revoke consent you have already given at any time. The legality of the data processing carried out until the revocation remains unaffected by the revocation.",
          },
          objection: {
            title:
              "Right to Object to Data Collection in Special Cases and to Direct Advertising (Art. 21 GDPR)",
            text1:
              "IF THE DATA PROCESSING IS BASED ON ART. 6 PARA. 1 LIT. E OR F GDPR, YOU HAVE THE RIGHT TO OBJECT TO THE PROCESSING OF YOUR PERSONAL DATA AT ANY TIME FOR REASONS ARISING FROM YOUR PARTICULAR SITUATION; THIS ALSO APPLIES TO PROFILING BASED ON THESE PROVISIONS. THE RESPECTIVE LEGAL BASIS ON WHICH PROCESSING IS BASED CAN BE FOUND IN THIS PRIVACY POLICY. IF YOU OBJECT, WE WILL NO LONGER PROCESS YOUR AFFECTED PERSONAL DATA UNLESS WE CAN DEMONSTRATE COMPELLING LEGITIMATE GROUNDS FOR THE PROCESSING THAT OVERRIDE YOUR INTERESTS, RIGHTS, AND FREEDOMS OR THE PROCESSING SERVES THE ASSERTION, EXERCISE, OR DEFENSE OF LEGAL CLAIMS (OBJECTION PURSUANT TO ART. 21 PARA. 1 GDPR).",
            text2:
              "IF YOUR PERSONAL DATA IS PROCESSED FOR THE PURPOSE OF DIRECT ADVERTISING, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME TO THE PROCESSING OF PERSONAL DATA CONCERNING YOU FOR THE PURPOSE OF SUCH ADVERTISING; THIS ALSO APPLIES TO PROFILING TO THE EXTENT THAT IT IS RELATED TO SUCH DIRECT ADVERTISING. IF YOU OBJECT, YOUR PERSONAL DATA WILL SUBSEQUENTLY NO LONGER BE USED FOR THE PURPOSE OF DIRECT ADVERTISING (OBJECTION PURSUANT TO ART. 21 PARA. 2 GDPR).",
          },
          complaint: {
            title:
              "Right to Lodge a Complaint with the Competent Supervisory Authority",
            text: "In the event of violations of the GDPR, data subjects have the right to lodge a complaint with a supervisory authority, in particular in the Member State of their habitual residence, place of work, or place of the alleged infringement. The right to lodge a complaint exists without prejudice to other administrative or judicial remedies.",
          },
          portability: {
            title: "Right to Data Portability",
            text: "You have the right to have data that we process automatically on the basis of your consent or in fulfillment of a contract handed over to you or to a third party in a common, machine-readable format. If you request the direct transfer of the data to another responsible party, this will only be done insofar as it is technically feasible.",
          },
          access: {
            title: "Information, Correction, and Deletion",
            text: "Within the framework of the applicable legal provisions, you have the right at any time to free information about your stored personal data, its origin and recipient, and the purpose of the data processing and, if applicable, a right to correction or deletion of this data. For this purpose, as well as for further questions on the subject of personal data, you can contact us at any time.",
          },
          restriction: {
            title: "Right to Restriction of Processing",
            text1:
              "You have the right to request the restriction of the processing of your personal data. For this purpose, you can contact us at any time. The right to restriction of processing exists in the following cases:",
            points: [
              "If you dispute the accuracy of your personal data stored by us, we usually need time to verify this. For the duration of the verification, you have the right to request the restriction of the processing of your personal data.",
              "If the processing of your personal data was/is unlawful, you can request the restriction of data processing instead of deletion.",
              "If we no longer need your personal data, but you need it for the exercise, defense, or assertion of legal claims, you have the right to request the restriction of the processing of your personal data instead of deletion.",
              "If you have lodged an objection pursuant to Art. 21 para. 1 GDPR, a balance must be struck between your interests and ours. As long as it has not yet been determined whose interests prevail, you have the right to request the restriction of the processing of your personal data.",
            ],
            text2:
              "If you have restricted the processing of your personal data, these data may only be processed - apart from their storage - with your consent or for the assertion, exercise, or defense of legal claims or for the protection of the rights of another natural or legal person or for reasons of an important public interest of the European Union or a Member State.",
          },
          ssl: {
            title: "SSL or TLS Encryption",
            text1:
              'For security reasons and to protect the transmission of confidential content, such as orders or inquiries that you send to us as the site operator, this site uses SSL or TLS encryption. You can recognize an encrypted connection by the fact that the address line of the browser changes from "http://" to "https://" and by the lock symbol in your browser line.',
            text2:
              "If SSL or TLS encryption is activated, the data you transmit to us cannot be read by third parties.",
          },
        },
        dataCollection: {
          title: "4. Data Collection on this Website",
          contactForm: {
            title: "Contact Form",
            text1:
              "If you send us inquiries via the contact form, your details from the inquiry form, including the contact details you provided there, will be stored by us for the purpose of processing the inquiry and in case of follow-up questions. We do not pass on this data without your consent.",
            text2:
              "The processing of this data is based on Art. 6 para. 1 lit. b GDPR, if your request is related to the fulfillment of a contract or is necessary for the implementation of pre-contractual measures. In all other cases, the processing is based on our legitimate interest in the effective processing of the inquiries addressed to us (Art. 6 para. 1 lit. f GDPR) or on your consent (Art. 6 para. 1 lit. a GDPR) if this has been requested; the consent can be revoked at any time.",
            text3:
              "The data you enter in the contact form will remain with us until you request us to delete it, revoke your consent to storage, or the purpose for data storage no longer applies (e.g., after your request has been processed). Mandatory legal provisions - in particular retention periods - remain unaffected.",
          },
          email: {
            title: "Inquiry by Email, Telephone, or Fax",
            text1:
              "If you contact us by email, telephone, or fax, your inquiry, including all resulting personal data (name, inquiry), will be stored and processed by us for the purpose of processing your request. We do not pass on this data without your consent.",
            text2:
              "The processing of this data is based on Art. 6 para. 1 lit. b GDPR, if your request is related to the fulfillment of a contract or is necessary for the implementation of pre-contractual measures. In all other cases, the processing is based on our legitimate interest in the effective processing of the inquiries addressed to us (Art. 6 para. 1 lit. f GDPR) or on your consent (Art. 6 para. 1 lit. a GDPR) if this has been requested; the consent can be revoked at any time.",
            text3:
              "The data you send to us via contact requests remain with us until you request us to delete them, revoke your consent to storage, or the purpose for data storage no longer applies (e.g., after your request has been processed). Mandatory legal provisions - in particular statutory retention periods - remain unaffected.",
          },
          whatsapp: {
            title: "Communication via WhatsApp",
            text1:
              "For communication with our customers and other third parties, we use, among other things, the instant messaging service WhatsApp. The provider is WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Ireland.",
            text2:
              "The communication is encrypted end-to-end (peer-to-peer), which prevents WhatsApp or other third parties from gaining access to the communication content. However, WhatsApp gains access to metadata that is generated in the course of the communication process (e.g., sender, recipient, and time). We also point out that WhatsApp, according to its own statements, shares personal data of its users with its parent company Meta, which is based in the USA. Further details on data processing can be found in WhatsApp's privacy policy at:",
            link1: "https://www.whatsapp.com/legal/#privacy-policy",
            text3:
              "The use of WhatsApp is based on our legitimate interest in the fastest and most effective communication possible with customers, interested parties, and other business and contractual partners (Art. 6 para. 1 lit. f GDPR). If a corresponding consent has been requested, the data processing is carried out exclusively on the basis of the consent; this can be revoked at any time with effect for the future.",
            text4:
              "The communication content exchanged between you and us on WhatsApp remains with us until you request us to delete it, revoke your consent to storage, or the purpose for data storage no longer applies (e.g., after your request has been processed). Mandatory legal provisions - in particular retention periods - remain unaffected.",
            text5:
              'The company is certified under the "EU-US Data Privacy Framework" (DPF). The DPF is an agreement between the European Union and the USA that is intended to ensure compliance with European data protection standards for data processing in the USA. Every company certified under the DPF undertakes to comply with these data protection standards. Further information on this can be obtained from the provider at the following link:',
            link2: "https://www.dataprivacyframework.gov/participant/7735",
            text6: 'We use WhatsApp in the "WhatsApp Business" variant.',
            text7:
              "The data transfer to the USA is based on the standard contractual clauses of the EU Commission. Details can be found here:",
            link3:
              "https://www.whatsapp.com/legal/business-data-transfer-addendum.",
            text8:
              "We have concluded a data processing agreement (DPA) with the above-mentioned provider.",
          },
          calendly: {
            title: "Calendly",
            text1:
              'On our website, you have the opportunity to schedule appointments with us. For appointment booking, we use the tool "Calendly". The provider is Calendly LLC, 271 17th St NW, 10th Floor, Atlanta, Georgia 30363, USA (hereinafter "Calendly").',
            text2:
              "For the purpose of appointment booking, you enter the requested data and the desired appointment in the form provided. The data entered is used for planning, conducting, and, if necessary, following up on the appointment. The appointment data is stored for us on Calendly's servers, whose privacy policy you can view here:",
            link1: "https://calendly.com/privacy",
            text3:
              "The data you enter remains with us until you request us to delete it, revoke your consent to storage, or the purpose for data storage no longer applies. Mandatory legal provisions - in particular retention periods - remain unaffected.",
            text4:
              "The legal basis for data processing is Art. 6 para. 1 lit. f GDPR. The website operator has a legitimate interest in making appointments with interested parties and customers as uncomplicated as possible. If a corresponding consent has been requested, the processing is carried out exclusively on the basis of Art. 6 para. 1 lit. a GDPR and § 25 para. 1 TTDSG, insofar as the consent includes the storage of cookies or access to information on the user's device (e.g., device fingerprinting) within the meaning of the TTDSG. The consent can be revoked at any time.",
            text5:
              "The data transfer to the USA is based on the standard contractual clauses of the EU Commission. Details can be found here:",
            link2: "https://calendly.com/pages/dpa",
            text6:
              'The company is certified under the "EU-US Data Privacy Framework" (DPF). The DPF is an agreement between the European Union and the USA that is intended to ensure compliance with European data protection standards for data processing in the USA. Every company certified under the DPF undertakes to comply with these data protection standards. Further information on this can be obtained from the provider at the following link:',
            link3: "https://www.dataprivacyframework.gov/participant/6050",
            processing: {
              title: "Order Processing",
              text: "We have concluded an order processing agreement (AVV) for the use of the above-mentioned service. This is a contract required by data protection law, which ensures that the service provider processes the personal data of our website visitors only in accordance with our instructions and in compliance with the GDPR.",
            },
          },
        },
        conference: {
          title: "5. Audio and Video Conferences",
          processing: {
            title: "Data Processing",
            text1:
              "For communication with our customers, we use, among other things, online conference tools. The tools we use in detail are listed below. If you communicate with us via video or audio conference via the Internet, your personal data will be collected and processed by us and the provider of the respective conference tool.",
            text2:
              'The conference tools collect all data that you provide/use to use the tools (email address and/or your telephone number). Furthermore, the conference tools process the duration of the conference, start and end (time) of participation in the conference, number of participants, and other "context information" in connection with the communication process (metadata).',
            text3:
              "In addition, the provider of the tool processes all technical data required for the handling of online communication. This includes, in particular, IP addresses, MAC addresses, device IDs, device type, operating system type and version, client version, camera type, microphone or loudspeaker, and the type of connection.",
            text4:
              "If content is exchanged, uploaded, or otherwise made available within the tool, it is also stored on the servers of the tool providers. Such content includes, in particular, cloud recordings, chat/instant messages, voicemails, uploaded photos and videos, files, whiteboards, and other information shared while using the service.",
            text5:
              "Please note that we do not have full control over the data processing procedures of the tools used. Our options depend largely on the company policies of the respective provider. Further information on data processing by the conference tools can be found in the privacy policies of the respective tools used, which we have listed below this text.",
          },
          purpose: {
            title: "Purpose and Legal Basis",
            text: "The conference tools are used to communicate with prospective or existing contractual partners or to offer certain services to our customers (Art. 6 para. 1 lit. b GDPR). Furthermore, the use of the tools serves the general simplification and acceleration of communication with us or our company (legitimate interest within the meaning of Art. 6 para. 1 lit. f GDPR). If consent has been requested, the use of the tools in question is based on this consent; the consent can be revoked at any time with effect for the future.",
          },
          storage: {
            title: "Storage Duration",
            text1:
              "The data we collect directly via the video and conference tools will be deleted from our systems as soon as you request us to delete it, revoke your consent to storage, or the purpose for data storage no longer applies. Stored cookies remain on your device until you delete them. Mandatory legal retention periods remain unaffected.",
            text2:
              "We have no influence on the storage period of your data, which is stored by the operators of the conference tools for their own purposes. For details, please contact the operators of the conference tools directly.",
          },
          tools: {
            title: "Conference Tools Used",
            text: "We use the following conference tools:",
            googleMeet: {
              title: "Google Meet",
              text1:
                "We use Google Meet. The provider is Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland. For details on data processing, please refer to Google's privacy policy:",
              link1: "https://policies.google.com/privacy?hl=en",
              text2:
                'The company is certified under the "EU-US Data Privacy Framework" (DPF). The DPF is an agreement between the European Union and the USA that is intended to ensure compliance with European data protection standards for data processing in the USA. Every company certified under the DPF undertakes to comply with these data protection standards. Further information on this can be obtained from the provider at the following link:',
              link2: "https://www.dataprivacyframework.gov/participant/5780",
            },
          },
        },
        plugins: {
          title: "6. Plugins and Tools",
          googleFonts: {
            title: "Google Fonts (Local Hosting)",
            text1:
              "This site uses so-called Google Fonts, provided by Google, for the uniform display of fonts. Google Fonts are installed locally. A connection to Google servers does not take place.",
            text2: "For more information on Google Fonts, please visit",
            link1: "https://developers.google.com/fonts/faq",
            text3: "and see Google's privacy policy:",
            link2: "https://policies.google.com/privacy?hl=en",
          },
          source: {
            text: "Source:",
            link: "https://www.e-recht24.de",
          },
        },
      },
    },
  };

  const t = content[lang];

  return (
    <div>
      <div className="h-1/2">
        <div className="h-[50vh] w-screen overflow-hidden relative">
          <img
            src="/about/hand.jpg"
            alt={lang === "de" ? "Imagen de una mano" : "Image of a hand"}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
        <div className="border max-w-screen-sm mx-auto absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 sm:p-10 sm:min-w-px min-w-[80%] w-48 sm:w-fit">
          <h1 className="text-center text-[6vw] sm:text-[3vw] md:text-[2.5vw]">
            {t.title}
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-16 bg-white font-cabin mt-28 lg:mt-40">
        <div className="bg-[#F8F8F8] p-8">
          {/* 1. Data Protection at a Glance */}
          <Subtitle
            text={t.sections.overview.title}
            color="black"
            position="left"
            size="3xl"
          />
          <div>
            <p className="text-[25px] pt-4 font-vollkorn">
              {t.sections.overview.general.title}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.overview.general.text}
            </p>

            <p className="text-[25px] pt-3 font-vollkorn">
              {t.sections.overview.collection.title}
            </p>
            <p className="text-xl pt-3 font-vollkorn">
              {t.sections.overview.collection.responsible.title}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.overview.collection.responsible.text}
            </p>

            <p className="font-vollkorn text-[20px] pt-3">
              {t.sections.overview.collection.how.title}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.overview.collection.how.text1}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.overview.collection.how.text2}
            </p>

            <p className="font-vollkorn text-[20px] pt-3">
              {t.sections.overview.collection.purpose.title}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.overview.collection.purpose.text}
            </p>

            <p className="font-vollkorn text-[20px] pt-3">
              {t.sections.overview.collection.rights.title}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.overview.collection.rights.text1}
            </p>
            <p className="pt-3 pb-5 text-[#808080]">
              {t.sections.overview.collection.rights.text2}
            </p>

            {/* 2. Hosting */}
            <Subtitle
              text={t.sections.hosting.title}
              color="black"
              position="left"
              size="3xl"
            />

            <p className="pt-5 text-[#808080]">{t.sections.hosting.text1}</p>

            <p className="font-vollkorn text-[25px] pt-3">
              {t.sections.hosting.external.title}
            </p>
            <p className="pt-5 text-[#808080]">
              {t.sections.hosting.external.text1}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.hosting.external.text2}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.hosting.external.text3}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.hosting.external.text4}
            </p>
            <div className="pt-3 text-[#808080]">
              {t.sections.hosting.external.host.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
            <p className="font-vollkorn text-[20px] pt-3">
              {t.sections.hosting.external.processing.title}
            </p>
            <p className="pt-3 pb-5 text-[#808080]">
              {t.sections.hosting.external.processing.text}
            </p>

            {/* 3. General Information and Mandatory Information */}
            <Subtitle
              text={t.sections.general.title}
              color="black"
              position="left"
              size="3xl"
            />
            <p className="font-vollkorn text-[25px] pt-5">
              {t.sections.general.privacy.title}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.general.privacy.text1}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.general.privacy.text2}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.general.privacy.text3}
            </p>

            <p className="font-vollkorn text-[25px] pt-3">
              {t.sections.general.responsible.title}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.general.responsible.text1}
            </p>
            <div className="pt-3 text-[#808080]">
              {t.sections.general.responsible.address.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
            <div className="pt-3 text-[#808080]">
              {t.sections.general.responsible.contact.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
            <p className="pt-3 text-[#808080]">
              {t.sections.general.responsible.text2}
            </p>

            <p className="font-vollkorn text-[25px] pt-3">
              {t.sections.general.storage.title}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.general.storage.text}
            </p>

            <p className="font-vollkorn text-[25px] pt-3">
              {t.sections.general.legalBasis.title}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.general.legalBasis.text}
            </p>

            <p className="font-vollkorn text-[25px] pt-3">
              {t.sections.general.recipients.title}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.general.recipients.text}
            </p>

            <p className="font-vollkorn text-[25px] pt-3">
              {t.sections.general.revocation.title}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.general.revocation.text}
            </p>

            <p className="font-vollkorn text-[25px] pt-3">
              {t.sections.general.objection.title}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.general.objection.text1}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.general.objection.text2}
            </p>

            <p className="font-vollkorn text-[25px] pt-3">
              {t.sections.general.complaint.title}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.general.complaint.text}
            </p>

            <p className="font-vollkorn text-[25px] pt-3">
              {t.sections.general.portability.title}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.general.portability.text}
            </p>

            <p className="font-vollkorn text-[25px] pt-3">
              {t.sections.general.access.title}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.general.access.text}
            </p>

            <p className="font-vollkorn text-[25px] pt-3">
              {t.sections.general.restriction.title}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.general.restriction.text1}
            </p>
            <ul className="list-disc pl-5 pt-3">
              {t.sections.general.restriction.points.map((point, index) => (
                <li key={index} className="pt-3 text-[#808080]">
                  {point}
                </li>
              ))}
            </ul>
            <p className="pt-3 text-[#808080]">
              {t.sections.general.restriction.text2}
            </p>

            <p className="font-vollkorn text-[25px] pt-3">
              {t.sections.general.ssl.title}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.general.ssl.text1}
            </p>
            <p className="pt-3 pb-5 text-[#808080]">
              {t.sections.general.ssl.text2}
            </p>

            {/* 4. Data Collection on this Website */}
            <Subtitle
              text={t.sections.dataCollection.title}
              color="black"
              position="left"
              size="3xl"
            />
            <p className="font-vollkorn text-[25px] pt-5">
              {t.sections.dataCollection.contactForm.title}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.dataCollection.contactForm.text1}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.dataCollection.contactForm.text2}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.dataCollection.contactForm.text3}
            </p>

            <p className="font-vollkorn text-[25px] pt-3">
              {t.sections.dataCollection.email.title}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.dataCollection.email.text1}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.dataCollection.email.text2}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.dataCollection.email.text3}
            </p>

            <p className="font-vollkorn text-[25px] pt-3">
              {t.sections.dataCollection.whatsapp.title}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.dataCollection.whatsapp.text1}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.dataCollection.whatsapp.text2}
            </p>
            <a
              href={t.sections.dataCollection.whatsapp.link1}
              className="text-[#0171E3] hover:underline"
            >
              {t.sections.dataCollection.whatsapp.link1}
            </a>
            <p className="pt-3 text-[#808080]">
              {t.sections.dataCollection.whatsapp.text3}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.dataCollection.whatsapp.text4}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.dataCollection.whatsapp.text5}
            </p>
            <a
              className="text-[#0171E3] hover:underline break-words"
              href={t.sections.dataCollection.whatsapp.link2}
              aria-label="dataprivacyframework"
            >
              {t.sections.dataCollection.whatsapp.link2}
            </a>
            <p className="pt-3 text-[#808080]">
              {t.sections.dataCollection.whatsapp.text6}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.dataCollection.whatsapp.text7}
            </p>
            <a
              href={t.sections.dataCollection.whatsapp.link3}
              className="text-[#0171E3] hover:underline"
            >
              {t.sections.dataCollection.whatsapp.link3}
            </a>
            <p className="pt-3 text-[#808080]">
              {t.sections.dataCollection.whatsapp.text8}
            </p>

            <p className="font-vollkorn text-[25px] pt-3">
              {t.sections.dataCollection.calendly.title}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.dataCollection.calendly.text1}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.dataCollection.calendly.text2}
            </p>
            <a
              href={t.sections.dataCollection.calendly.link1}
              className="text-[#0171E3] hover:underline"
            >
              {t.sections.dataCollection.calendly.link1}
            </a>
            <p className="pt-3 text-[#808080]">
              {t.sections.dataCollection.calendly.text3}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.dataCollection.calendly.text4}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.dataCollection.calendly.text5}
            </p>
            <a
              href={t.sections.dataCollection.calendly.link2}
              className="text-[#0171E3] hover:underline break-words"
            >
              {t.sections.dataCollection.calendly.link2}
            </a>
            <p className="pt-3 text-[#808080]">
              {t.sections.dataCollection.calendly.text6}
            </p>
            <a
              href={t.sections.dataCollection.calendly.link3}
              className="text-[#0171E3] hover:underline break-words"
            >
              {t.sections.dataCollection.calendly.link3}
            </a>
            <p className="font-vollkorn text-[20px] pt-3">
              {t.sections.dataCollection.calendly.processing.title}
            </p>
            <p className="pt-3 pb-5 text-[#808080]">
              {t.sections.dataCollection.calendly.processing.text}
            </p>

            {/* 5. Audio and Video Conferences */}
            <Subtitle
              text={t.sections.conference.title}
              color="black"
              position="left"
              size="3xl"
            />
            <p className="font-vollkorn text-[20px] pt-5">
              {t.sections.conference.processing.title}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.conference.processing.text1}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.conference.processing.text2}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.conference.processing.text3}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.conference.processing.text4}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.conference.processing.text5}
            </p>

            <p className="font-vollkorn text-[20px] pt-3">
              {t.sections.conference.purpose.title}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.conference.purpose.text}
            </p>

            <p className="font-vollkorn text-[20px] pt-3">
              {t.sections.conference.storage.title}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.conference.storage.text1}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.conference.storage.text2}
            </p>

            <p className="font-vollkorn text-[20px] pt-3">
              {t.sections.conference.tools.title}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.conference.tools.text}
            </p>

            <p className="font-vollkorn text-[25px] pt-3">
              {t.sections.conference.tools.googleMeet.title}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.conference.tools.googleMeet.text1}
            </p>
            <a
              href={t.sections.conference.tools.googleMeet.link1}
              className="text-[#0171E3] hover:underline"
            >
              {t.sections.conference.tools.googleMeet.link1}
            </a>
            <div className="pb-5 pt-3 text-[#808080]">
              <p>{t.sections.conference.tools.googleMeet.text2}</p>
              <a
                href={t.sections.conference.tools.googleMeet.link2}
                className="text-[#0171E3] hover:underline break-words"
              >
                {t.sections.conference.tools.googleMeet.link2}
              </a>
            </div>

            {/* 6. Plugins and Tools */}
            <Subtitle
              text={t.sections.plugins.title}
              color="black"
              position="left"
              size="3xl"
            />
            <p className="font-vollkorn text-[25px] pt-5">
              {t.sections.plugins.googleFonts.title}
            </p>
            <p className="pt-3 text-[#808080]">
              {t.sections.plugins.googleFonts.text1}
            </p>
            <p className="text-[#808080]">
              {t.sections.plugins.googleFonts.text2}{" "}
              <a
                href={t.sections.plugins.googleFonts.link1}
                className="text-[#0171E3] hover:underline px-1"
              >
                {t.sections.plugins.googleFonts.link1}
              </a>
              {t.sections.plugins.googleFonts.text3}
            </p>
            <a
              href={t.sections.plugins.googleFonts.link2}
              className="text-[#0171E3] hover:underline"
            >
              {t.sections.plugins.googleFonts.link2}
            </a>
            <div className="flex items-center gap-2 pt-3">
              <p className="text-[#808080]">{t.sections.plugins.source.text}</p>
              <a
                href={t.sections.plugins.source.link}
                className="text-[#0171E3] hover:underline"
              >
                {t.sections.plugins.source.link}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

// import Subtitle from "@/app/components/customTags/Subtitle";

// import React from "react";

// const PrivacyPolicy = () => {
//   return (
//     <div>
//       <div className=" h-1/2">
//         <div className="h-[50vh] w-screen overflow-hidden relative">
//           <img
//             src="/about/hand.jpg"
//             alt="Imagen de una mano"
//             className="absolute inset-0 w-full h-full object-cover object-center"
//           />
//         </div>
//         <div className="border max-w-screen-sm mx-auto   absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 sm:p-10 sm:min-w-px min-w-[80%] w-48 sm:w-fit ">
//           <h1 className="text-center text-[6vw] sm:text-[3vw] md:text-[2.5vw]">
//             Datenschutzerklärung
//           </h1>
//         </div>
//       </div>

//       <div className="mx-auto max-w-7xl px-4 sm:px-16 bg-white font-cabin mt-28 lg:mt-40">
//         <div className="bg-[#F8F8F8] p-8">
//           <Subtitle
//             text="1. Datenschutz auf einen Blick"
//             color="black"
//             position="left"
//             size="3xl"
//           />
//           <div>
//             <p className=" text-[25px] pt-4 font-vollkorn">
//               Allgemeine Hinweise
//             </p>
//             <p className="pt-3 text-[#808080]">
//               Die folgenden Hinweise geben einen einfachen Überblick darüber,
//               was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
//               Website besuchen. Personenbezogene Daten sind alle Daten, mit
//               denen Sie persönlich identifiziert werden können. Ausführliche
//               Informationen zum Thema Datenschutz entnehmen Sie unserer unter
//               diesem Text aufgeführten Datenschutzerklärung.
//             </p>
//             <p className="text-[25px] pt-3 font-vollkorn">
//               Datenerfassung auf dieser Website
//             </p>
//             <p className="text-xl pt-3 font-vollkorn">
//               Wer istverantwortlich für die Datenerfassung auf dieser Website?
//             </p>
//             <p className="pt-3 text-[#808080]">
//               Die Datenverarbeitung auf dieser Website erfolgt durch den
//               Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
//               „Hinweis zur Verantwortlichen Stelle“ in dieser
//               Datenschutzerklärung entnehmen.
//             </p>
//             <p className="font-vollkorn text-[20px] pt-3">
//               Wie erfassen wir Ihre Daten?
//             </p>
//             <p className="pt-3 text-[#808080]">
//               Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
//               mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in
//               ein Kontaktformular eingeben.
//             </p>
//             <p className="pt-3 text-[#808080]">
//               Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
//               Besuch der Website durch unsere IT- Systeme erfasst. Das sind vor
//               allem technische Daten (z. B. Internetbrowser, Betriebssystem oder
//               Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
//               automatisch, sobald Sie diese Website betreten.
//             </p>
//             <p className="font-vollkorn text-[20px] pt-3">
//               Wofür nutzen wir Ihre Daten?
//             </p>
//             <p className="pt-3 text-[#808080]">
//               Ein Teil der Daten wird erhoben, um eine fehlerfreie
//               Bereitstellung der Website zu gewährleisten. Andere Daten können
//               zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über
//               die Website Verträge geschlossen oder angebahnt werden können,
//               werden die übermittelten Daten auch für Vertragsangebote,
//               Bestellungen oder sonstige Auftragsanfragen verarbeitet.
//             </p>
//             <p className="font-vollkorn text-[20px] pt-3">
//               Welche Rechte haben Sie bezüglich Ihrer Daten?
//             </p>
//             <p className="pt-3 text-[#808080]">
//               Sie haben jederzeit das Recht, unentgeltlich Auskunft über
//               Herkunft, Empfänger und Zweck Ihrer gespeicherten
//               personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht,
//               die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie
//               eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie
//               diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem
//               haben Sie das Recht, unter bestimmten Umständen die Einschränkung
//               der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des
//               Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
//               Aufsichtsbehörde zu.
//             </p>
//             <p className="pt-3 pb-5 text-[#808080]">
//               Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie
//               sich jederzeit an uns wenden.
//             </p>
//             <Subtitle
//               text="2. Hosting "
//               color="black"
//               position="left"
//               size="3xl"
//             />
//             <p className="pt-5 text-[#808080]">
//               Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
//             </p>
//             <p className="font-vollkorn text-[25px] pt-3">Externes Hosting</p>
//             <p className="pt-3 text-[#808080]">
//               Diese Website wird extern gehostet. Die personenbezogenen Daten,
//               die auf dieser Website erfasst werden, werden auf den Servern des
//               Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um
//               IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
//               Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige
//               Daten, die über eine Website generiert werden, handeln.
//             </p>
//             <p className="pt-3 text-[#808080]">
//               Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung
//               gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs.
//               1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und
//               effizienten Bereitstellung unseres Online-Angebots durch einen
//               professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine
//               entsprechende Einwilligung abgefragt wurde, erfolgt die
//               Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a
//               DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die
//               Speicherung von Cookies oder den Zugriff auf Informationen im
//               Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des
//               TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.
//             </p>
//             <p className="pt-3 text-[#808080]">
//               Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit
//               verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten
//               erforderlich ist und unsere Weisungen in Bezug auf diese Daten
//               befolgen.
//             </p>
//             <p className="pt-3 text-[#808080]">
//               Wir setzen folgende(n) Hoster ein:
//             </p>
//             <div className="pt-3 text-[#808080]">
//               <p>Vercel Inc</p>
//               <p>650 California St</p>
//               <p>San Francisco</p>
//               <p>CA 94108</p>
//               <p>US</p>
//             </div>
//             <p className="font-vollkorn text-[20px] pt-3">
//               Auftragsverarbeitung
//             </p>
//             <p className="pt-3 pb-5 text-[#808080]">
//               Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur
//               Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt
//               es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag,
//               der gewährleistet, dass dieser die personenbezogenen Daten unserer
//               Websitebesucher nur nach unseren Weisungen und unter Einhaltung
//               der DSGVO verarbeitet.
//             </p>
//             <Subtitle
//               text="3. Allgemeine Hinweise und Pflichtinformationen  "
//               color="black"
//               position="left"
//               size="3xl"
//             />
//             <p className="font-vollkorn text-[25px] pt-5">Datenschutz</p>
//             <p className="pt-3 text-[#808080]">
//               Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
//               Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
//               vertraulich und entsprechend den gesetzlichen
//               Datenschutzvorschriften sowie dieser Datenschutzerklärung.
//             </p>
//             <p className="pt-3 text-[#808080]">
//               Wenn Sie diese Website benutzen, werden verschiedene
//               personenbezogene Daten erhoben. Personenbezogene Daten sind Daten,
//               mit denen Sie persönlich identifiziert werden können. Die
//               vorliegende Datenschutzerklärung erläutert, welche Daten wir
//               erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu
//               welchem Zweck das geschieht.
//             </p>
//             <p className="pt-3 text-[#808080]">
//               Wir weisen darauf hin, dass die Datenübertragung im Internet (z.
//               B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen
//               kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch
//               Dritte ist nicht möglich.
//             </p>
//             <p className="font-vollkorn text-[25px] pt-3">
//               Hinweis zur verantwortlichen Stelle
//             </p>
//             <p className="pt-3 text-[#808080]">
//               Die verantwortliche Stelle für die Datenverarbeitung auf dieser
//               Website ist:
//             </p>
//             <div className="pt-3 text-[#808080]">
//               <p>Anna Schenk</p>
//               <p>Rahmhügel 1</p>
//               <p>97478 Knetzgau</p>
//               <p>Deutschland</p>
//             </div>
//             <div className="pt-3 text-[#808080]">
//               <p>Telefon: 015679 314176</p>
//               <p>E-Mail: info@as-vision-partners.com</p>
//             </div>
//             <p className="pt-3 text-[#808080]">
//               Verantwortliche Stelle ist die natürliche oder juristische Person,
//               die allein oder gemeinsam mit anderen über die Zwecke und Mittel
//               der Verarbeitung von personenbezogenen Daten (z. B. Namen,
//               E-Mail-Adressen o. Ä.) entscheidet.
//             </p>
//             <p className="font-vollkorn text-[25px] pt-3">Speicherdauer</p>
//             <p className="pt-3 text-[#808080]">
//               Soweit innerhalb dieser Datenschutzerklärung keine speziellere
//               Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen
//               Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
//               Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine
//               Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten
//               gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für
//               die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer-
//               oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten
//               Fall erfolgt die Löschung nach Fortfall dieser Gründe.
//             </p>
//             <p className="font-vollkorn text-[25px] pt-3">
//               Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung
//               auf dieser Website
//             </p>{" "}
//             <p className="pt-3 text-[#808080]">
//               Sofern Sie in die Datenverarbeitung eingewilligt haben,
//               verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von
//               Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern
//               besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet
//               werden. Im Falle einer ausdrücklichen Einwilligung in die
//               Übertragung personenbezogener Daten in Drittstaaten erfolgt die
//               Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a
//               DSGVO. Sofern Sie in die Speicherung von Cookies oder in den
//               Zugriff auf Informationen in Ihr Endgerät (z. B. via
//               Device-Fingerprinting) eingewilligt haben, erfolgt die
//               Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TDDDG.
//               Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur
//               Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen
//               erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6
//               Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten,
//               sofern diese zur Erfüllung einer rechtlichen Verpflichtung
//               erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO.
//               Die Datenverarbeitung kann ferner auf Grundlage unseres
//               berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen.
//               Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird
//               in den folgenden Absätzen dieser Datenschutzerklärung informiert.
//             </p>
//             <p className="font-vollkorn text-[25px] pt-3">
//               Empfänger von personenbezogenen Daten
//             </p>
//             <p className="pt-3 text-[#808080]">
//               Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit
//               verschiedenen externen Stellen zusammen. Dabei ist teilweise auch
//               eine Übermittlung von personenbezogenen Daten an diese externen
//               Stellen erforderlich. Wir geben personenbezogene Daten nur dann an
//               externe Stellen weiter, wenn dies im Rahmen einer
//               Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu
//               verpflichtet sind (z. B. Weitergabe von Daten an Steuerbehörden),
//               wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f
//               DSGVO an der Weitergabe haben oder wenn eine sonstige
//               Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von
//               Auftragsverarbeitern geben wir personenbezogene Daten unserer
//               Kunden nur auf Grundlage eines gültigen Vertrags über
//               Auftragsverarbeitung weiter. Im Falle einer gemeinsamen
//               Verarbeitung wird ein Vertrag über gemeinsame Verarbeitung
//               geschlossen.
//             </p>
//             <p className="font-vollkorn text-[25px] pt-3">
//               Widerruf Ihrer Einwilligung zur Datenverarbeitung
//             </p>
//             <p className="pt-3 text-[#808080]">
//               Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
//               Einwilligung möglich. Sie können eine bereits erteilte
//               Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum
//               Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
//               unberührt.
//             </p>
//             <p className="font-vollkorn text-[25px] pt-3">
//               Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen
//               sowie gegen Direktwerbung (Art. 21 DSGVO)
//             </p>
//             <p className="pt-3 text-[#808080]">
//               WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E
//               ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN,
//               DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE
//               VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN;
//               DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES
//               PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE
//               VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG.
//               WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN
//               PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR
//               KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG
//               NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN
//               ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER
//               VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1
//               DSGVO).
//             </p>
//             <p className="pt-3 text-[#808080]">
//               WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG
//               ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN
//               DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM
//               ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS
//               PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG
//               STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN
//               ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET
//               (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
//             </p>
//             <p className="font-vollkorn text-[25px] pt-3">
//               Beschwerderecht bei der zuständigen Aufsichtsbehörde
//             </p>
//             <p className="pt-3 text-[#808080]">
//               Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
//               Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
//               Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
//               oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht
//               besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
//               gerichtlicher Rechtsbehelfe.
//             </p>
//             <p className="font-vollkorn text-[25px] pt-3">
//               Recht auf Datenübertragbarkeit
//             </p>
//             <p className="pt-3 text-[#808080]">
//               Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
//               Einwilligung oder in Erfüllung eines Vertrags automatisiert
//               verarbeiten, an sich oder an einen Dritten in einem gängigen,
//               maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die
//               direkte Übertragung der Daten an einen anderen Verantwortlichen
//               verlangen, erfolgt dies nur, soweit es technisch machbar ist.
//             </p>
//             <p className="font-vollkorn text-[25px] pt-3">
//               Auskunft, Berichtigung und Löschung
//             </p>
//             <p className="pt-3 text-[#808080]">
//               Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
//               jederzeit das Recht auf unentgeltliche Auskunft über Ihre
//               gespeicherten personenbezogenen Daten, deren Herkunft und
//               Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht
//               auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu
//               weiteren Fragen zum Thema personenbezogene Daten können Sie sich
//               jederzeit an uns wenden.
//             </p>
//             <p className="font-vollkorn text-[25px] pt-3">
//               Recht auf Einschränkung der Verarbeitung
//             </p>
//             <p className="pt-3 text-[#808080]">
//               Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
//               personenbezogenen Daten zu verlangen. Hierzu können Sie sich
//               jederzeit an uns wenden. Das Recht auf Einschränkung der
//               Verarbeitung besteht in folgenden Fällen:
//             </p>
//             <ul className="list-disc pl-5 pt-3">
//               <li className="pt-3 text-[#808080]">
//                 Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
//                 personenbezogenen Daten bestreiten, benötigen wir in der Regel
//                 Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie
//                 das Recht, die Einschränkung der Verarbeitung Ihrer
//                 personenbezogenen Daten zu verlangen.
//               </li>

//               <li className="pt-3 text-[#808080]">
//                 Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig
//                 geschah/geschieht, können Sie statt der Löschung die
//                 Einschränkung der Datenverarbeitung verlangen.
//               </li>
//               <li className="pt-3 text-[#808080]">
//                 Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie
//                 sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von
//                 Rechtsansprüchen benötigen, haben Sie das Recht, statt der
//                 Löschung die Einschränkung der Verarbeitung Ihrer
//                 personenbezogenen Daten zu verlangen.
//               </li>
//               <li className="pt-3 text-[#808080]">
//                 Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt
//                 haben, muss eine Abwägung zwischen Ihren und unseren Interessen
//                 vorgenommen werden. Solange noch nicht feststeht, wessen
//                 Interessen überwiegen, haben Sie das Recht, die Einschränkung
//                 der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
//               </li>
//             </ul>
//             <p className="pt-3 text-[#808080]">
//               Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
//               eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung
//               abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung,
//               Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz
//               der Rechte einer anderen natürlichen oder juristischen Person oder
//               aus Gründen eines wichtigen öffentlichen Interesses der
//               Europäischen Union oder eines Mitgliedstaats verarbeitet werden.
//             </p>
//             <p className="font-vollkorn text-[25px] pt-3">
//               SSL- bzw. TLS-Verschlüsselung
//             </p>
//             <p className="pt-3 text-[#808080]">
//               Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
//               Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen
//               oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine
//               SSL- bzw. TLS- Verschlüsselung. Eine verschlüsselte Verbindung
//               erkennen Sie daran, dass die Adresszeile des Browsers von
//               „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in
//               Ihrer Browserzeile.
//             </p>
//             <p className="pt-3 pb-5 text-[#808080]">
//               Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die
//               Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen
//               werden.
//             </p>
//             <Subtitle
//               text="4. Datenerfassung auf dieser Website"
//               color="black"
//               position="left"
//               size="3xl"
//             />
//             <p className="font-vollkorn text-[25px] pt-5">Kontaktformular</p>
//             <p className="pt-3 text-[#808080]">
//               Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
//               Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
//               angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für
//               den Fall von Anschlussfragen bei uns gespeichert. Diese Daten
//               geben wir nicht ohne Ihre Einwilligung weiter.
//             </p>
//             <p className="pt-3 text-[#808080]">
//               Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
//               Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
//               Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
//               Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
//               Verarbeitung auf unserem berechtigten Interesse an der effektiven
//               Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f
//               DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)
//               sofern diese abgefragt wurde; die Einwilligung ist jederzeit
//               widerrufbar.
//             </p>
//             <p className="pt-3 text-[#808080]">
//               Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei
//               uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur
//               Speicherung widerrufen oder der Zweck für die Datenspeicherung
//               entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage).
//               Zwingende gesetzliche Bestimmungen – insbesondere
//               Aufbewahrungsfristen – bleiben unberührt.
//             </p>
//             <p className="font-vollkorn text-[25px] pt-3">
//               Anfrage per E-Mail, Telefon oder Telefax
//             </p>
//             <p className="pt-3 text-[#808080]">
//               Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird
//               Ihre Anfrage inklusive aller daraus hervorgehenden
//               personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung
//               Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten
//               geben wir nicht ohne Ihre Einwilligung weiter.
//             </p>
//             <p className="pt-3 text-[#808080]">
//               Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
//               Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
//               Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
//               Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
//               Verarbeitung auf unserem berechtigten Interesse an der effektiven
//               Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f
//               DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)
//               sofern diese abgefragt wurde; die Einwilligung ist jederzeit
//               widerrufbar.
//             </p>
//             <p className="pt-3 text-[#808080]">
//               Die von Ihnen an uns per Kontaktanfragen übersandten Daten
//               verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre
//               Einwilligung zur Speicherung widerrufen oder der Zweck für die
//               Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung
//               Ihres Anliegens). Zwingende gesetzliche Bestimmungen –
//               insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
//             </p>
//             <p className="font-vollkorn text-[25px] pt-3">
//               Kommunikation via WhatsApp
//             </p>
//             <p className="pt-3 text-[#808080]">
//               Für die Kommunikation mit unseren Kunden und sonstigen Dritten
//               nutzen wir unter anderem den Instant- Messaging-Dienst WhatsApp.
//               Anbieter ist die WhatsApp Ireland Limited, 4 Grand Canal Square,
//               Grand Canal Harbour, Dublin 2, Irland.
//             </p>
//             <p className="pt-3 text-[#808080]">
//               Die Kommunikation erfolgt über eine Ende-zu-Ende-Verschlüsselung
//               (Peer-to-Peer), die verhindert, dass WhatsApp oder sonstige Dritte
//               Zugriff auf die Kommunikationsinhalte erlangen können. WhatsApp
//               erhält jedoch Zugriff auf Metadaten, die im Zuge des
//               Kommunikationsvorgangs entstehen (z. B. Absender, Empfänger und
//               Zeitpunkt). Wir weisen ferner darauf hin, dass WhatsApp nach
//               eigener Aussage, personenbezogene Daten seiner Nutzer mit seiner
//               in den USA ansässigen Konzernmutter Meta teilt. Weitere Details
//               zur Datenverarbeitung finden Sie in der Datenschutzrichtlinie von
//               WhatsApp unter:
//             </p>
//             <a
//               href="https://www.whatsapp.com/legal/#privacy-policy"
//               className="text-[#0171E3] hover:underline"
//             >
//               https://www.whatsapp.com/legal/#privacy-policy.
//             </a>
//             <p className="pt-3 text-[#808080]">
//               Der Einsatz von WhatsApp erfolgt auf Grundlage unseres
//               berechtigten Interesses an einer möglichst schnellen und
//               effektiven Kommunikation mit Kunden, Interessenten und sonstigen
//               Geschäfts- und Vertragspartnern (Art. 6 Abs. 1 lit. f DSGVO).
//               Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt
//               die Datenverarbeitung ausschließlich auf Grundlage der
//               Einwilligung; diese ist jederzeit mit Wirkung für die Zukunft
//               widerrufbar.
//             </p>
//             <p className="pt-3 text-[#808080]">
//               Die zwischen Ihnen und uns auf WhatsApp ausgetauschten
//               Kommunikationsinhalte verbleiben bei uns, bis Sie uns zur Löschung
//               auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der
//               Zweck für die Datenspeicherung entfällt (z. B. nach
//               abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche
//               Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben
//               unberührt.
//             </p>
//             <p className="pt-3 text-[#808080]">
//               Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US
//               Data Privacy Framework“ (DPF). Der DPF ist ein Übereinkommen
//               zwischen der Europäischen Union und den USA, der die Einhaltung
//               europäischer Datenschutzstandards bei Datenverarbeitungen in den
//               USA gewährleisten soll. Jedes nach dem DPF zertifizierte
//               Unternehmen verpflichtet sich, diese Datenschutzstandards
//               einzuhalten. Weitere Informationen hierzu erhalten Sie vom
//               Anbieter unter folgendem Link:
//             </p>
//             <a
//               className="text-[#0171E3] hover:underline break-words"
//               href="https://www.dataprivacyframework.gov/participant/7735"
//               aria-label="dataprivacyframework"
//             >
//               https://www.dataprivacyframework.gov/participant/7735.
//             </a>
//             <p className="pt-3 text-[#808080]">
//               Wir nutzen WhatsApp in der Variante „WhatsApp Business“.
//             </p>
//             <p className="pt-3 text-[#808080]">
//               Die Datenübertragung in die USA wird auf die
//               Standardvertragsklauseln der EU-Kommission gestützt. Details
//               finden Sie hier:
//             </p>
//             <a
//               href="https://www.whatsapp.com/legal/business-data-transfer-addendum."
//               className="text-[#0171E3] hover:underline"
//             >
//               https://www.whatsapp.com/legal/business-data-transfer-addendum.
//             </a>
//             <p className="pt-3 text-[#808080]">
//               Wir haben einen Vertrag über Auftragsverarbeitung (AVV) mit dem
//               oben genannten Anbieter geschlossen.
//             </p>
//             <p className="font-vollkorn text-[25px] pt-3">Calendly</p>
//             <p className="pt-3 text-[#808080]">
//               Auf unserer Website haben Sie die Möglichkeit, Termine mit uns zu
//               vereinbaren. Für die Terminbuchung nutzen wir das Tool „Calendly“.
//               Anbieter ist die Calendly LLC, 271 17th St NW, 10th Floor,
//               Atlanta, Georgia 30363, USA (nachfolgend „Calendly“).
//             </p>
//             <p className="pt-3 text-[#808080]">
//               Zum Zweck der Terminbuchung geben Sie die abgefragten Daten und
//               den Wunschtermin in die dafür vorgesehene Maske ein. Die
//               eingegebenen Daten werden für die Planung, Durchführung und ggf.
//               für die Nachbereitung des Termins verwendet. Die Termindaten
//               werden für uns auf den Servern von Calendly gespeichert, dessen
//               Datenschutzerklärung Sie hier einsehen können:
//             </p>
//             <a
//               href="https://calendly.com/privacy"
//               className="text-[#0171E3] hover:underline"
//             >
//               https://calendly.com/privacy.
//             </a>
//             <p className="pt-3 text-[#808080]">
//               Die von Ihnen eingegebenen Daten verbleiben bei uns, bis Sie uns
//               zur Löschung auffordern, Ihre Einwilligung zur Speicherung
//               widerrufen oder der Zweck für die Datenspeicherung entfällt.
//               Zwingende gesetzliche Bestimmungen – insbesondere
//               Aufbewahrungsfristen – bleiben unberührt.
//             </p>
//             <p className="pt-3 text-[#808080]">
//               Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f
//               DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an
//               einer möglichst unkomplizierten Terminvereinbarung mit
//               Interessenten und Kunden. Sofern eine entsprechende Einwilligung
//               abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf
//               Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG,
//               soweit die Einwilligung die Speicherung von Cookies oder den
//               Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-
//               Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist
//               jederzeit widerrufbar.
//             </p>
//             <p className="pt-3 text-[#808080]">
//               Die Datenübertragung in die USA wird auf die
//               Standardvertragsklauseln der EU-Kommission gestützt. Details
//               finden Sie hier:
//             </p>
//             <a
//               href="https://calendly.com/pages/dpa"
//               className="text-[#0171E3] hover:underline break-words"
//             >
//               https://calendly.com/pages/dpa.
//             </a>
//             <p className="pt-3 text-[#808080]">
//               Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US
//               Data Privacy Framework“ (DPF). Der DPF ist ein Übereinkommen
//               zwischen der Europäischen Union und den USA, der die Einhaltung
//               europäischer Datenschutzstandards bei Datenverarbeitungen in den
//               USA gewährleisten soll. Jedes nach dem DPF zertifizierte
//               Unternehmen verpflichtet sich, diese Datenschutzstandards
//               einzuhalten. Weitere Informationen hierzu erhalten Sie vom
//               Anbieter unter folgendem Link:
//             </p>
//             <a
//               href="https://www.dataprivacyframework.gov/participant/6050"
//               className="text-[#0171E3] hover:underline break-words"
//             >
//               https://www.dataprivacyframework.gov/participant/6050.
//             </a>
//             <p className="font-vollkorn text-[20px] pt-3">
//               Auftragsverarbeitung
//             </p>
//             <p className="pt-3 pb-5 text-[#808080]">
//               Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur
//               Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt
//               es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag,
//               der gewährleistet, dass dieser die personenbezogenen Daten unserer
//               Websitebesucher nur nach unseren Weisungen und unter Einhaltung
//               der DSGVO verarbeitet.
//             </p>
//             <Subtitle
//               text="5. Audio- und Videokonferenzen "
//               color="black"
//               position="left"
//               size="3xl"
//             />
//             <p className="font-vollkorn text-[20px] pt-5">Datenverarbeitung</p>
//             <p className="pt-3 text-[#808080]">
//               Für die Kommunikation mit unseren Kunden setzen wir unter anderen
//               Online-Konferenz-Tools ein. Die im Einzelnen von uns genutzten
//               Tools sind unten aufgelistet. Wenn Sie mit uns per Video- oder
//               Audiokonferenz via Internet kommunizieren, werden Ihre
//               personenbezogenen Daten von uns und dem Anbieter des jeweiligen
//               Konferenz-Tools erfasst und verarbeitet.
//             </p>
//             <p className="pt-3 text-[#808080]">
//               Die Konferenz-Tools erfassen dabei alle Daten, die Sie zur Nutzung
//               der Tools bereitstellen/einsetzen (E-Mail- Adresse und/oder Ihre
//               Telefonnummer). Ferner verarbeiten die Konferenz-Tools die Dauer
//               der Konferenz, Beginn und Ende (Zeit) der Teilnahme an der
//               Konferenz, Anzahl der Teilnehmer und sonstige
//               „Kontextinformationen“ im Zusammenhang mit dem
//               Kommunikationsvorgang (Metadaten).
//             </p>
//             <p className="pt-3 text-[#808080]">
//               Des Weiteren verarbeitet der Anbieter des Tools alle technischen
//               Daten, die zur Abwicklung der Online- Kommunikation erforderlich
//               sind. Dies umfasst insbesondere IP-Adressen, MAC-Adressen,
//               Geräte-IDs, Gerätetyp, Betriebssystemtyp und -version,
//               Client-Version, Kameratyp, Mikrofon oder Lautsprecher sowie die
//               Art der Verbindung.
//             </p>
//             <p className="pt-3 text-[#808080]">
//               Sofern innerhalb des Tools Inhalte ausgetauscht, hochgeladen oder
//               in sonstiger Weise bereitgestellt werden, werden diese ebenfalls
//               auf den Servern der Tool-Anbieter gespeichert. Zu solchen Inhalten
//               zählen insbesondere Cloud-Aufzeichnungen, Chat-/
//               Sofortnachrichten, Voicemails hochgeladene Fotos und Videos,
//               Dateien, Whiteboards und andere Informationen, die während der
//               Nutzung des Dienstes geteilt werden.
//             </p>
//             <p className="pt-3 text-[#808080]">
//               Bitte beachten Sie, dass wir nicht vollumfänglich Einfluss auf die
//               Datenverarbeitungsvorgänge der verwendeten Tools haben. Unsere
//               Möglichkeiten richten sich maßgeblich nach der Unternehmenspolitik
//               des jeweiligen Anbieters. Weitere Hinweise zur Datenverarbeitung
//               durch die Konferenztools entnehmen Sie den Datenschutzerklärungen
//               der jeweils eingesetzten Tools, die wir unter diesem Text
//               aufgeführt haben.
//             </p>
//             <p className="font-vollkorn text-[20px] pt-3">
//               Zweck und Rechtsgrundlagen
//             </p>
//             <p className="pt-3 text-[#808080]">
//               Die Konferenz-Tools werden genutzt, um mit angehenden oder
//               bestehenden Vertragspartnern zu kommunizieren oder bestimmte
//               Leistungen gegenüber unseren Kunden anzubieten (Art. 6 Abs. 1 lit.
//               b DSGVO). Des Weiteren dient der Einsatz der Tools der allgemeinen
//               Vereinfachung und Beschleunigung der Kommunikation mit uns bzw.
//               unserem Unternehmen (berechtigtes Interesse im Sinne von Art. 6
//               Abs. 1 lit. f DSGVO). Soweit eine Einwilligung abgefragt wurde,
//               erfolgt der Einsatz der betreffenden Tools auf Grundlage dieser
//               Einwilligung; die Einwilligung ist jederzeit mit Wirkung für die
//               Zukunft widerrufbar.
//             </p>
//             <p className="font-vollkorn text-[20px] pt-3">Speicherdauer</p>
//             <p className="pt-3 text-[#808080]">
//               Die unmittelbar von uns über die Video- und Konferenz-Tools
//               erfassten Daten werden von unseren Systemen gelöscht, sobald Sie
//               uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung
//               widerrufen oder der Zweck für die Datenspeicherung entfällt.
//               Gespeicherte Cookies verbleiben auf Ihrem Endgerät, bis Sie sie
//               löschen. Zwingende gesetzliche Aufbewahrungsfristen bleiben
//               unberührt.
//             </p>
//             <p className="pt-3 text-[#808080]">
//               Auf die Speicherdauer Ihrer Daten, die von den Betreibern der
//               Konferenz-Tools zu eigenen Zwecken gespeichert werden, haben wir
//               keinen Einfluss. Für Einzelheiten dazu informieren Sie sich bitte
//               direkt bei den Betreibern der Konferenz-Tools.
//             </p>
//             <p className="font-vollkorn text-[20px] pt-3">
//               Eingesetzte Konferenz-Tools
//             </p>
//             <p className="pt-3 text-[#808080]">
//               Wir setzen folgende Konferenz-Tools ein:
//             </p>
//             <p className="font-vollkorn text-[25px] pt-3">Google Meet</p>
//             <p className="pt-3 text-[#808080]">
//               Wir nutzen Google Meet. Anbieter ist die Google Ireland Limited,
//               Gordon House, Barrow Street, Dublin 4, Irland. Details zur
//               Datenverarbeitung entnehmen Sie der Datenschutzerklärung von
//               Google:
//             </p>
//             <a
//               href="https://policies.google.com/privacy?hl=de"
//               className="text-[#0171E3] hover:underline"
//             >
//               https://policies.google.com/privacy?hl=de.
//             </a>
//             <div className="pb-5 pt-3 text-[#808080]">
//               <p>
//                 Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US
//                 Data Privacy Framework“ (DPF). Der DPF ist ein Übereinkommen
//                 zwischen der Europäischen Union und den USA, der die Einhaltung
//                 europäischer Datenschutzstandards bei Datenverarbeitungen in den
//                 USA gewährleisten soll. Jedes nach dem DPF zertifizierte
//                 Unternehmen verpflichtet sich, diese Datenschutzstandards
//                 einzuhalten. Weitere Informationen hierzu erhalten Sie vom
//                 Anbieter unter folgendem Link:
//               </p>
//               <a
//                 href="https://www.dataprivacyframework.gov/participant/5780"
//                 className="text-[#0171E3] hover:underline break-words"
//               >
//                 https://www.dataprivacyframework.gov/participant/5780.
//               </a>
//             </div>
//             <Subtitle
//               text="6.⁠ ⁠Plugins und Tools"
//               color="black"
//               position="left"
//               size="3xl"
//             />
//             <p className="font-vollkorn text-[25px] pt-5">
//               Google Fonts (lokales Hosting)
//             </p>
//             <p className="pt-3 text-[#808080]">
//               Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten
//               so genannte Google Fonts, die von Google bereitgestellt werden.
//               Die Google Fonts sind lokal installiert. Eine Verbindung zu
//               Servern von Google findet dabei nicht statt.
//             </p>
//             <p className="text-[#808080]">
//               Weitere Informationen zu Google Fonts finden Sie unter
//               <a
//                 href="https://developers.google.com/fonts/faq"
//                 className="text-[#0171E3] hover:underline px-1"
//               >
//                 https://developers.google.com/fonts/faq
//               </a>
//               und in der Datenschutzerklärung von Google:
//             </p>
//             <a
//               href="https://policies.google.com/privacy?hl=de"
//               className="text-[#0171E3] hover:underline"
//             >
//               https://policies.google.com/privacy?hl=de.
//             </a>
//             <div className="flex items-center gap-2 pt-3">
//               <p className="text-[#808080]">Quelle:</p>
//               <a
//                 href="https://www.e-recht24.de"
//                 className="text-[#0171E3] hover:underline"
//               >
//                 https://www.e-recht24.de
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PrivacyPolicy;

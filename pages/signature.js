import React, { useRef, useState } from "react";

function Signature() {
    const signatureRef = useRef(null);
    const [isCopied, setIsCopied] = useState(false);
  
    const handleCopyClick = () => {
      if (signatureRef.current) {
        const signature = signatureRef.current;
        const range = document.createRange();
        range.selectNode(signature);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        setIsCopied(true);
      }
    };
  return (
    <section>
      <table
        ref={signatureRef}
        cellPadding={0}
        cellSpacing={0}
        className="table__StyledTable-sc-1avdl6r-0 kAbRZI"
        style={{
          verticalAlign: "-webkit-baseline-middle",
          fontSize: "medium",
          fontFamily: "Verdana",
        }}
      >
        <tbody>
          <tr>
            <td>
              <table
                cellPadding={0}
                cellSpacing={0}
                className="table__StyledTable-sc-1avdl6r-0 kAbRZI"
                style={{
                  verticalAlign: "-webkit-baseline-middle",
                  fontSize: "medium",
                  fontFamily: "Verdana",
                }}
              >
                <tbody>
                  <tr>
                    <td style={{ verticalAlign: "top" }}>
                      <table
                        cellPadding={0}
                        cellSpacing={0}
                        className="table__StyledTable-sc-1avdl6r-0 kAbRZI"
                        style={{
                          verticalAlign: "-webkit-baseline-middle",
                          fontSize: "medium",
                          fontFamily: "Verdana",
                        }}
                      >
                        <tbody>
                          <tr>
                            <td
                              className="template1__ImageContainer-sc-nmby7a-0 gjVAKi"
                              style={{ textAlign: "center" }}
                            >
                              <img
                                src="https://anhchiemvn.org/logo_anhchiem-removebg-preview.png"
                                role="presentation"
                                width={130}
                                className="image__StyledImage-sc-hupvqm-0 gYgOut"
                                style={{ display: "block", maxWidth: 130 }}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td width={46}>
                      <div />
                    </td>
                    <td style={{ padding: 0, verticalAlign: "middle" }}>
                      <h2
                        color="#292929"
                        className="name__NameContainer-sc-1m457h3-0 jxbGUj"
                        style={{
                          margin: '0',
                          fontSize: '18px',
                          color: "rgb(41, 41, 41)",
                          fontWeight: '600',
                        }}
                      >
                        <span>Colin</span>
                        <span>&nbsp;</span>
                        <span>Dixon</span>
                      </h2>
                      <p
                        color="#292929"
                        fontSize="medium"
                        className="job-title__Container-sc-1hmtp73-0 ifJNJc"
                        style={{
                          margin: 0,
                          color: "rgb(41, 41, 41)",
                          fontSize: 14,
                          lineHeight: '22px',
                        }}
                      >
                        <span>Founder</span>
                      </p>
                      <p
                        color="#292929"
                        fontSize="medium"
                        className="company-details__CompanyContainer-sc-j5pyy8-0 VnOLK"
                        style={{
                          margin: 0,
                          fontWeight: 500,
                          color: "rgb(41, 41, 41)",
                          fontSize: '14px',
                          lineHeight: '22px',
                        }}
                      >
                        <span>Anh Chị Em</span>
                      </p>
                      <table
                        cellPadding={0}
                        cellSpacing={0}
                        className="table__StyledTable-sc-1avdl6r-0 kAbRZI"
                        style={{
                          width: "100%",
                          verticalAlign: "-webkit-baseline-middle",
                          fontSize: "medium",
                          fontFamily: "Verdana",
                        }}
                      >
                        <tbody>
                          <tr>
                            <td height={30} />
                          </tr>
                          <tr>
                            <td
                              color="#FCC93A"
                              direction="horizontal"
                              width="auto"
                              height={1}
                              className="color-divider__Divider-sc-1h38qjv-0 llIisW"
                              style={{
                                width: "100%",
                                borderBottom: "1px solid rgb(252, 201, 58)",
                                borderLeft: "none",
                                display: "block",
                              }}
                            />
                          </tr>
                          <tr>
                            <td height={30} />
                          </tr>
                        </tbody>
                      </table>
                      <table
                        cellPadding={0}
                        cellSpacing={0}
                        className="table__StyledTable-sc-1avdl6r-0 kAbRZI"
                        style={{
                          verticalAlign: "-webkit-baseline-middle",
                          fontSize: "medium",
                          fontFamily: "Verdana",
                        }}
                      >
                        <tbody>
                          <tr height={25} style={{ verticalAlign: "middle" }}>
                            <td width={30} style={{ verticalAlign: "middle" }}>
                              <table
                                cellPadding={0}
                                cellSpacing={0}
                                className="table__StyledTable-sc-1avdl6r-0 kAbRZI"
                                style={{
                                  verticalAlign: "-webkit-baseline-middle",
                                  fontSize: "medium",
                                  fontFamily: "Verdana",
                                }}
                              >
                                <tbody>
                                  <tr>
                                    <td style={{ verticalAlign: "bottom" }}>
                                      <span
                                        color="#FCC93A"
                                        width={11}
                                        className="contact-info__IconWrapper-sc-mmkjr6-1 bglVXe"
                                        style={{
                                          display: "inline-block",
                                          backgroundColor: "rgb(252, 201, 58)",
                                        }}
                                      >
                                        <img
                                          src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png"
                                          color="#FCC93A"
                                          alt="mobilePhone"
                                          width={13}
                                          className="contact-info__ContactLabelIcon-sc-mmkjr6-0 cnkwri"
                                          style={{
                                            display: "block",
                                            backgroundColor:
                                              "rgb(252, 201, 58)",
                                          }}
                                        />
                                      </span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                            <td
                              style={{ padding: 0, color: "rgb(41, 41, 41)" }}
                            >
                              <a
                                href="tel:+84(0) 94 776 2033"
                                color="#292929"
                                className="contact-info__ExternalLink-sc-mmkjr6-2 ibLXSU"
                                style={{
                                  textDecoration: "none",
                                  color: "rgb(41, 41, 41)",
                                  fontSize: 12,
                                }}
                              >
                                <span>+84(0) 94 776 2033</span>
                              </a>
                            </td>
                          </tr>
                          <tr height={25} style={{ verticalAlign: "middle" }}>
                            <td width={30} style={{ verticalAlign: "middle" }}>
                              <table
                                cellPadding={0}
                                cellSpacing={0}
                                className="table__StyledTable-sc-1avdl6r-0 kAbRZI"
                                style={{
                                  verticalAlign: "-webkit-baseline-middle",
                                  fontSize: "medium",
                                  fontFamily: "Verdana",
                                }}
                              >
                                <tbody>
                                  <tr>
                                    <td style={{ verticalAlign: "bottom" }}>
                                      <span
                                        color="#FCC93A"
                                        width={11}
                                        className="contact-info__IconWrapper-sc-mmkjr6-1 bglVXe"
                                        style={{
                                          display: "inline-block",
                                          backgroundColor: "rgb(252, 201, 58)",
                                        }}
                                      >
                                        <img
                                          src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png"
                                          color="#FCC93A"
                                          alt="emailAddress"
                                          width={13}
                                          className="contact-info__ContactLabelIcon-sc-mmkjr6-0 cnkwri"
                                          style={{
                                            display: "block",
                                            backgroundColor:
                                              "rgb(252, 201, 58)",
                                          }}
                                        />
                                      </span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                            <td style={{ padding: 0 }}>
                              <a
                                href="mailto:colin@anhchiemvn.org"
                                color="#292929"
                                className="contact-info__ExternalLink-sc-mmkjr6-2 ibLXSU"
                                style={{
                                  textDecoration: "none",
                                  color: "rgb(41, 41, 41)",
                                  fontSize: 12,
                                }}
                              >
                                <span>colin@anhchiemvn.org</span>
                              </a>
                            </td>
                          </tr>
                          <tr height={25} style={{ verticalAlign: "middle" }}>
                            <td width={30} style={{ verticalAlign: "middle" }}>
                              <table
                                cellPadding={0}
                                cellSpacing={0}
                                className="table__StyledTable-sc-1avdl6r-0 kAbRZI"
                                style={{
                                  verticalAlign: "-webkit-baseline-middle",
                                  fontSize: "medium",
                                  fontFamily: "Verdana",
                                }}
                              >
                                <tbody>
                                  <tr>
                                    <td style={{ verticalAlign: "bottom" }}>
                                      <span
                                        color="#FCC93A"
                                        width={11}
                                        className="contact-info__IconWrapper-sc-mmkjr6-1 bglVXe"
                                        style={{
                                          display: "inline-block",
                                          backgroundColor: "rgb(252, 201, 58)",
                                        }}
                                      >
                                        <img
                                          src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png"
                                          color="#FCC93A"
                                          alt="website"
                                          width={13}
                                          className="contact-info__ContactLabelIcon-sc-mmkjr6-0 cnkwri"
                                          style={{
                                            display: "block",
                                            backgroundColor:
                                              "rgb(252, 201, 58)",
                                          }}
                                        />
                                      </span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                            <td style={{ padding: 0 }}>
                              <a
                                href="https://anhchiemvn.org"
                                color="#292929"
                                className="contact-info__ExternalLink-sc-mmkjr6-2 ibLXSU"
                                style={{
                                  textDecoration: "none",
                                  color: "rgb(41, 41, 41)",
                                  fontSize: 12,
                                }}
                              >
                                <span>https://anhchiemvn.org</span>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table
                        cellPadding={0}
                        cellSpacing={0}
                        className="table__StyledTable-sc-1avdl6r-0 kAbRZI"
                        style={{
                          verticalAlign: "-webkit-baseline-middle",
                          fontSize: "medium",
                          fontFamily: "Verdana",
                        }}
                      >
                        <tbody>
                          <tr>
                            <td height={30} />
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>

      <button onClick={handleCopyClick}>
        {isCopied ? 'Copied!' : 'Copy Signature'}
      </button>
    </section>
  );
}

export default Signature;

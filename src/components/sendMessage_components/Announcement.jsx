import React from "react";

function Announcement() {
  const sendEmbedMessage = async () => {
    const request = new XMLHttpRequest();

    var channel_discord = document.getElementById("url").value;
    var hook = "";

    if (channel_discord == "roles") {
      hook = "...";
    } else if (channel_discord == "announcement") {
      hook = "...";
    }

    request.open("POST", hook);

    request.setRequestHeader("Content-type", "application/json");

    var pesan = {
      embeds: [
        {
          color: 16711680, // You can change this color to any decimal value (e.g., 16711680 for red).
        },
      ],
    };

    var normalMessage = document.getElementById("normal-message").value;
    if (normalMessage) {
      pesan.content = normalMessage;
    }

    var titleEmbed = document.getElementById("title-embed").value;
    if (titleEmbed) {
      pesan.embeds[0].title = titleEmbed;
    }

    var thumbnailUrl = document.getElementById("thumbnail-url").value;
    if (thumbnailUrl) {
      var thumbnailImage = new Image();
      thumbnailImage.onerror = function () {
        alert("Invalid thumbnail URL");
      };
      thumbnailImage.src = thumbnailUrl;
      pesan.embeds[0].thumbnail = {
        url: thumbnailUrl,
      };
    }

    var imageUrl = document.getElementById("image-url").value;
    if (imageUrl) {
      var image = new Image();
      image.onerror = function () {
        alert("Invalid image URL");
      };
      image.src = imageUrl;
      pesan.embeds[0].image = {
        url: imageUrl,
      };
    }

    var description = document.getElementById("description").value;
    if (description) {
      pesan.embeds[0].description = description;
    }

    var footerText = document.getElementById("footer-text").value;
    if (footerText) {
      pesan.embeds[0].footer = {
        text: footerText,
      };
    }

    var footerIconUrl = document.getElementById("footer-icon-url").value;
    if (footerIconUrl) {
      if (!pesan.embeds[0].footer) {
        pesan.embeds[0].footer = {};
      }
      pesan.embeds[0].footer.icon_url = footerIconUrl;
    }

    request.onerror = function () {
      console.error("An error occurred while sending the message.");
    };

    request.onload = function () {
      if (request.status >= 200 && request.status < 300) {
        console.log("Message sent successfully.");
        alert("Message sent successfully.");
      } else {
        console.error("An error occurred while sending the message.");
        alert(
          "Failed to send message. \nMake sure you have filled at least one of the fields."
        );
      }
    };

    request.send(JSON.stringify(pesan));
  };

  return (
    <>
      <div className="Announcement">
        <div className="announcement">
          <div className="container">
            <div className="card p-3" style={{ width: "17rem" }}>
              <h5>CHANNEL</h5>
              <select
                name="url"
                id="url"
                className="my-3 form-control select-channel w-100"
              >
                <option value="roles">🚪︱roles</option>
                <option value="announcement">📰︱announcement</option>
              </select>
            </div>
            <div className="row">
              <div className="col">
                <div className="bubble-chat text-start">
                  <div className="card p-3">
                    <h6 className="name">PixiHive</h6>
                    <textarea
                      type="text"
                      className="form-control w-100"
                      id="normal-message"
                      placeholder="Normal message"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Announcement;

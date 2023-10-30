import 'bootstrap';
import '@fortawesome/fontawesome-free';
import 'jquery.mb.ytplayer';
import 'jquery';
import 'leaflet';
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

    /********************** Embed youtube video *********************/

    $('.player').YTPlayer();

    /********************** Countdown *********************/
    const end = new Date("Aug 16, 2024 16:00:00").getTime();
    const dayEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    const x = setInterval(function () {
    let now = new Date().getTime();
    const difference = end - now;
    
    if (difference < 0) {
        clearInterval(x);
        document.getElementById("done").innerHTML = "We're married! 🎉";
        return;
    }
        
    dayEl.innerText = Math.floor(difference / days);
    hoursEl.innerText = Math.floor( (difference % days) / hours );
    minutesEl.innerText = Math.floor( (difference % hours) / minutes );
    secondsEl.innerText = Math.floor( (difference % minutes) / seconds );  
    }, seconds);

    
    /********************** Maps *********************/
    
    var map = L.map('leaflet-map').setView([47.50727305049044, 19.045640138808253], 8);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    const fontAwesomeIcon = L.divIcon({
      html: '<i class="fa-solid fa-location-pin fa-2xl"></i>',
      iconSize: [20, 20],
      className: 'myDivIcon'
    });
    L.marker([47.725636792867306, 18.37800653068907], {
      icon: fontAwesomeIcon
    }).addTo(map)
    .bindPopup(' <h5>Hilltop Borbirtok & Étterem</h5><p>Neszmély, Melegeshegy, 2544 Magyarország</p><p><a href="https://www.google.com/maps/dir//Neszm%C3%A9ly,+Hilltop+Borbirtok+%26+%C3%89tterem,+Melegeshegy,+2544+Magyarorsz%C3%A1g/@47.7252312,18.3594667,15z/data=!4m21!1m11!3m10!1s0x476a5aa0c613c585:0x56f927e22b444349!2sHilltop+Borbirtok+%26+%C3%89tterem!5m3!1s2023-09-24!4m1!1i2!8m2!3d47.7252182!4d18.3779207!16s%2Fg%2F1tnl05yt!4m8!1m0!1m5!1m1!1s0x476a5aa0c613c585:0x56f927e22b444349!2m2!1d18.3779208!2d47.7252182!3e3?entry=ttu" target="_blank">Directions</a></p>')
    .openPopup();

     /********************** RSVP *********************/

     $('#rsvp-form').on('submit', function (e) {
      e.preventDefault();
      var data = $(this).serialize();
  
      $('#alert-wrapper').html(alert_markup('info', '<strong>Just a sec!</strong> We are saving your details.'));
  
      if (MD5($('#invite_code').val()) !== 'b2fe913682d4730ed54f25b699ded7ca'
          && MD5($('#invite_code').val()) !== '2ac7f43695eb0479d5846bb38eec59cc') {
          $('#alert-wrapper').html(alert_markup('danger', '<strong>Sorry!</strong> Your invite code is incorrect.'));
      } else {
          $.post('https://script.google.com/macros/s/AKfycbxQPkUha430BP4cjGmkIOhgbVAlRAeRS3WVdvEz_ATRB_p3F-dB8CgV1T74fXZXWn4y/exec', data)
              .done(function (data) {
                  console.log(data);
                  if (data.result === "error") {
                      $('#alert-wrapper').html(alert_markup('danger', data.message));
                  } else {
                      $('#alert-wrapper').html('');
                      $('#rsvp-modal').modal('show');
                  }
              })
              .fail(function (data) {
                  console.log(data);
                  $('#alert-wrapper').html(alert_markup('danger', '<strong>Sorry!</strong> There is some issue with the server. '));
              });
          }
      });

    // alert_markup
    function alert_markup(alert_type, msg) {
      return '<div class="alert alert-' + alert_type + '" role="alert">' + msg + ' <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
    }
    // MD5 Encoding
    var MD5 = function (string) {

      function RotateLeft(lValue, iShiftBits) {
          return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
      }

      function AddUnsigned(lX, lY) {
          var lX4, lY4, lX8, lY8, lResult;
          lX8 = (lX & 0x80000000);
          lY8 = (lY & 0x80000000);
          lX4 = (lX & 0x40000000);
          lY4 = (lY & 0x40000000);
          lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
          if (lX4 & lY4) {
              return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
          }
          if (lX4 | lY4) {
              if (lResult & 0x40000000) {
                  return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
              } else {
                  return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
              }
          } else {
              return (lResult ^ lX8 ^ lY8);
          }
      }

      function F(x, y, z) {
          return (x & y) | ((~x) & z);
      }

      function G(x, y, z) {
          return (x & z) | (y & (~z));
      }

      function H(x, y, z) {
          return (x ^ y ^ z);
      }

      function I(x, y, z) {
          return (y ^ (x | (~z)));
      }

      function FF(a, b, c, d, x, s, ac) {
          a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
          return AddUnsigned(RotateLeft(a, s), b);
      };

      function GG(a, b, c, d, x, s, ac) {
          a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
          return AddUnsigned(RotateLeft(a, s), b);
      };

      function HH(a, b, c, d, x, s, ac) {
          a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
          return AddUnsigned(RotateLeft(a, s), b);
      };

      function II(a, b, c, d, x, s, ac) {
          a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
          return AddUnsigned(RotateLeft(a, s), b);
      };

      function ConvertToWordArray(string) {
          var lWordCount;
          var lMessageLength = string.length;
          var lNumberOfWords_temp1 = lMessageLength + 8;
          var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
          var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
          var lWordArray = Array(lNumberOfWords - 1);
          var lBytePosition = 0;
          var lByteCount = 0;
          while (lByteCount < lMessageLength) {
              lWordCount = (lByteCount - (lByteCount % 4)) / 4;
              lBytePosition = (lByteCount % 4) * 8;
              lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
              lByteCount++;
          }
          lWordCount = (lByteCount - (lByteCount % 4)) / 4;
          lBytePosition = (lByteCount % 4) * 8;
          lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
          lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
          lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
          return lWordArray;
      };

      function WordToHex(lValue) {
          var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
          for (lCount = 0; lCount <= 3; lCount++) {
              lByte = (lValue >>> (lCount * 8)) & 255;
              WordToHexValue_temp = "0" + lByte.toString(16);
              WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
          }
          return WordToHexValue;
      };

      function Utf8Encode(string) {
          string = string.replace(/\r\n/g, "\n");
          var utftext = "";

          for (var n = 0; n < string.length; n++) {

              var c = string.charCodeAt(n);

              if (c < 128) {
                  utftext += String.fromCharCode(c);
              }
              else if ((c > 127) && (c < 2048)) {
                  utftext += String.fromCharCode((c >> 6) | 192);
                  utftext += String.fromCharCode((c & 63) | 128);
              }
              else {
                  utftext += String.fromCharCode((c >> 12) | 224);
                  utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                  utftext += String.fromCharCode((c & 63) | 128);
              }

          }

          return utftext;
      };

      var x = Array();
      var k, AA, BB, CC, DD, a, b, c, d;
      var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
      var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
      var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
      var S41 = 6, S42 = 10, S43 = 15, S44 = 21;

      string = Utf8Encode(string);

      x = ConvertToWordArray(string);

      a = 0x67452301;
      b = 0xEFCDAB89;
      c = 0x98BADCFE;
      d = 0x10325476;

      for (k = 0; k < x.length; k += 16) {
          AA = a;
          BB = b;
          CC = c;
          DD = d;
          a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
          d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
          c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
          b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
          a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
          d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
          c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
          b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
          a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
          d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
          c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
          b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
          a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
          d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
          c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
          b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
          a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
          d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
          c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
          b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
          a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
          d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
          c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
          b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
          a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
          d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
          c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
          b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
          a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
          d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
          c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
          b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
          a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
          d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
          c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
          b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
          a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
          d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
          c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
          b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
          a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
          d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
          c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
          b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
          a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
          d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
          c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
          b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
          a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
          d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
          c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
          b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
          a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
          d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
          c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
          b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
          a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
          d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
          c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
          b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
          a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
          d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
          c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
          b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
          a = AddUnsigned(a, AA);
          b = AddUnsigned(b, BB);
          c = AddUnsigned(c, CC);
          d = AddUnsigned(d, DD);
      }

      var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);

      return temp.toLowerCase();
    };
const pertanyaan = document.getElementById("bot");
const jawaban = document.getElementById("jawaban");

let init = 0;

const botSay = (data) => {
  return [
    "Halo, let me introduce myself, my name is Norah. Nice to meet you, and what's your name?",
    `Hai ${data?.nama}, berapa usia kamu?`,
    `Ohhh kamu ${data?.usia} tahun, hobi kamu apa nih?`,
    `Wahh hobi kamu ${data?.hobi} ya asik juga, btw kamu udah punya pacar?`,
    `ohhh ${data?.pacar}, oke deh udahan dulu ya?`,
  ];
};

pertanyaan.innerHTML = botSay()[0];

let userData = [];

function botStart() {
  init++;
  if (init == 1) {
    botDelay({ nama: jawaban.value });
  } else if (init == 2) {
    botDelay({ usia: jawaban.value });
  } else if (init == 3) {
    botDelay({ hobi: jawaban.value });
  } else if (init == 4) {
    botDelay({ pacar: jawaban.value });
  } else if (init == 5) {
    finishing();
  } else {
    botEnd();
  }
}

function botDelay(jawabanUser) {
  console.log({ userData: userData });
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init];
  }, [1000]);
  userData.push(jawaban.value);
  jawaban.value = "";
}

function finishing() {
  pertanyaan.innerHTML = `Thank you ya ${userData[0]} udah main ke Norahbot :)`;
  jawaban.value = "siap thanks juga";
}

function botEnd() {
  window.location.reload();
}

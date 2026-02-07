let seeMore = document.getElementById("more");
let seeLess = document.getElementById("less");
let storyPara = document.getElementById("story");

seeMore.addEventListener("click", () => {
    storyPara.innerHTML += `I told it about your eyes, how they carry calm like a
                    promise. I described your smile, gentle and shy, the kind that doesn't try to be seen but stays
                    anyway.
                    I talked about the way you feel close even when you're far, like a warmth that doesn't leave the
                    room.

                    I gave it only my photo and my memories. I described a moment at sunset, a quiet city breathing
                    behind
                    us, a pause in time where nothing hurts. And then the image appeared.

                    I stared, not because it was perfect, but because it was familiar. It didn't look like something
                    created—it looked like something remembered. A coincidence, maybe. Or maybe when you describe
                    someone
                    with love instead of precision, the truth finds its own way to show up.

                    I didn't try to prove anything. I just smiled. Some feelings don't need evidence. They recognize
                    themselves.`

    seeMore.style.display = "none";
    seeLess.style.display = "block";
})

seeLess.addEventListener("click", () => {
    storyPara.innerHTML = `I didn't set out to recreate you. I only tried to remember.
                    Late at night, when silence grows louder than words, I spoke to an AI the way one speaks to the
                    moon—softly, honestly, without expectation.`

    seeMore.style.display = "block";
    seeLess.style.display = "none";
})
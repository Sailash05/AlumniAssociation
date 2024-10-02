async function abcd()
{
    const data = await fetch('http://localhost:4000/');
    const response = await data.json();
    console.log(response);
}

abcd();
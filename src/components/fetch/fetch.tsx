export async function fetchGet(url:string, stateSetter: (arg0: any) => void)
    {
        return fetch(url)
        .then((response) => 
        {
            if(!response.ok) {
                    alert(response.statusText)
                    throw Error(response.statusText)
                   }
                else {
                    return response.json();
        }}
        )
        // .then((data) => console.log(data))
        .then((data) => stateSetter(data))
        .catch((err) => {
            throw new Error('GET did not execute successfully: ' + err);
        });
    }

export function fetchPost(url:string, content: any)
    {
        const reqOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(content)
        };

        try{
            fetch(url, reqOptions)
            .then((response) => 
            {
                if(!response.ok) {
                    alert(response.statusText)
                    throw Error(response.statusText)
                   }
                else {
                    alert('Added successfully')
                    return response.json();
            }}
            )
            .then(data => console.log("Added ", data.name))
            .catch((err) => {
                throw new Error('POST did not execute successfully: ' + err);
            })
        }
        catch (e)
        {   
            alert('Error: ' + e);
        }

    }

export function fetchPut(url:string, id:string, content:any)
{
    const reqOptions = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(content)
    };

    try{
        fetch(url + id + '/', reqOptions)
        .then((response) => 
        {
            if(!response.ok) {
                alert(response.statusText)
                throw Error(response.statusText)
               }
            else {
                alert('Updated successfully')
               return response.json();
        }}
        )
        .then(data => console.log("Updated ", data.name))
        .catch((err) => {
            throw new Error('POST did not execute successfully: ' + err);
        })
    }
    catch (e)
    {   
        alert('Error: ' + e);
    }
}

export function fetchDelete(url:string, id: string)
{
    fetch(url + id + '/', {method: 'DELETE'})
    .then(() => console.log("Removed ", id ))
    .then(() => window.location.reload())
}

export function defineGender(value: boolean)
{
    if (value==false)
    {
        return 'Female';
    }
    else
    {
        return 'Male';
    }
}
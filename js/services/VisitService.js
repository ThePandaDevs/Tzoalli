
export class VisitService {

    GetAllCompletedVisits() {
        return fetch("http://127.0.0.1:8000/api/visit/getMyVisits/Realizado",
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer 2|yxcPDjc23t9wWR2Cf5GEEQxBHMZTHcbVnquQJzG0"
                }
            })
    }

}
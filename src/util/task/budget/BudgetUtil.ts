
export function getBudgetList(callback) {
    fetch(process.env.NEXT_PUBLIC_API_COMMON + '/budget/list', {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        callback(data.data);
      });
}

export function getDeptList(callback) {
  fetch(process.env.NEXT_PUBLIC_API_COMMON + '/department/list', {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      callback(data.data);
    });
}

export function deleteBudget(seq, callback) {
  if(confirm('삭제 하시겠습니까?')){
    fetch(process.env.NEXT_PUBLIC_API_COMMON + '/budget/delete/' + seq, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.result.success){
          getBudgetList(callback);
          alert('삭제되었습니다.');
        }else{
          alert('오류가 발생했습니다.\n'+data.result.message);
        }
      })
      .catch(() => {
        alert('오류가 발생했습니다.\n잠시후 다시 시도하세요.');
      });
  }
}

export function createBudget(data, callback) {
  fetch(process.env.NEXT_PUBLIC_API_COMMON + '/budget/create', {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if(data.result.success){
        getBudgetList(callback);
        alert('등록 되었습니다.');
      }else{
        alert('오류가 발생했습니다.\n'+data.result.message);
      }
    })
    .catch(() => {
      alert('오류가 발생했습니다.\n잠시후 다시 시도하세요.');
    });
}
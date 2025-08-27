import React from 'react'

function List() {
   let dummyTitle = "Recent Activities"
    let dummyHeaderList = ["Customer Name" , "Email" , "Phone" , "Status" , "Address"]
    let dummyData = [
        {
        title:" New Order Received",
        date:'2023-08-15',
        detail:"Order #12345 from Emily Carter",
        status:"Walk-In",
        phone:"92345-678910",
    },
        {
        title:" Product Added",
        status:"Walk-In",
        phone:"92345-678910",
        date:'2023-08-14',
        detail:"Added Product X to inventory"
    },

        {
        title:"Customer Registered",
        status:"Walk-In",
        phone:"92345-678910",
        date:'2023-08-12',
        detail:"New customer, Ethan Chen, registered"
    },
        
        {
        title:" New Order Received",
        status:"Walk-In",
        phone:"92345-678910",
        date:'2023-08-15',
        detail:"Order #12345 from Emily Carter"
    },
        {
        title:" Product Added",
        status:"Walk-In",
        phone:"92345-678910",
        date:'2023-08-14',
        detail:"Added Product X to inventory"
    },

        {
        title:"Customer Registered",
        status:"Walk-In",
        phone:"92345-678910",
        date:'2023-08-12',
        detail:"New customer, Ethan Chen, registered"
    },
        
]
  return (
   <>

            <div className="px-4 py-3">
              <div className="flex overflow-hidden rounded-xl border border-[#cedbe8] bg-slate-50">
                <table className="flex-1">
                  <thead>
                    <tr className="bg-slate-50">
                      {dummyHeaderList?.map((name)=>(
                        <th className="px-4 py-3 text-left text-[#0d141c] w-[400px] text-sm font-medium leading-normal">
                        {name}
                      </th>
                      ))}
                        </tr>
                  </thead>
                 <tbody>
                    {dummyData?.map((i)=>(
                     <tr className="border-t border-t-[#cedbe8]">
                      <td className="h-[72px] px-4 py-2 w-[400px] text-[#0d141c] text-sm font-normal leading-normal">
                       {i.title}
                      </td>
                      <td className="h-[72px] px-4 py-2 w-[400px] text-[#49719c] text-sm font-normal leading-normal">
                        {i.date}
                      </td>
                      <td className="h-[72px] px-4 py-2 w-[400px] text-[#49719c] text-sm font-normal leading-normal">
                        {i.phone}
                      </td>
                      <td className="h-[72px] px-4 py-2 w-[400px] text-sm font-normal leading-normal">
                         <span
                      className={`text-xs px-3 py-3 rounded text-white  bg-[#49719c]`}
                    >
                       {i.status}
                    </span>
                       
                      </td>
                      <td className="h-[72px] px-4 py-2 w-[400px] text-[#49719c] text-sm font-normal leading-normal">
                        {i.detail}
                      </td>
                    </tr>
                    ))}

                 </tbody>
                </table>
              </div>
            </div>
   </>
  )
}

export default List

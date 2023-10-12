import React from 'react'

function Related_section() {
  return (
      <div>
          <section>
              <div className="container">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active " id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane"
                        type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">DESCRIPTION</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane"
                        type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">ADDITIONAL
                        INFORMATION</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane"
                        type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">REVIEWS
                        (1)</button>
                </li>
                  </ul>
                  <div className="tab-content pt-4 pb-5" id="myTabContent">
                <div className="tab-pane fade show active " id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab"
                    tabindex="0">Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis euismod, rhoncus tortor
                    quis, lobortis sapien. Sed imperdiet nulla in leo ullamcorper, in finibus elit porta. Sed eget
                    congue neque, mattis finibus neque. In vel dolor ac augue pretium suscipit. Ut nec massa in ligula
                    vestibulum mattis. Suspendisse imperdiet lorem eleifend nisi euismod, vel consequat ipsum luctus.
                    Morbi auctor vulputate hendrerit. Etiam vel lectus tortor. Pellentesque non pharetra mi. Cura </div>
                <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab"
                    tabindex="0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ipsa illo asperiores?
                    Maiores voluptatem atque vel ipsum nesciunt exercitationem dolorem!</div>
                <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab"
                    tabindex="0">Simone: <br/>
                    Love it
                    I‘ve just received my second pair of shoes. So my only problem is to decide which one to wear. Do I
                    have to say more?
                    Btw, I’ll wear them with the green laces not only on St.Patrick‘s Day <br/>
                    Jordan: <br/>
                    Beautiful, very well-made shoes!
                    I love my new das cognac shoes and I’ve tried to follow the new-shoes advice of not wearing them
                    every day at first, but that’s tough! -- They’re really pretty and they go with all of my clothes.
                </div>
            </div>
              </div>
          </section>
    </div>
  )
}

export default Related_section
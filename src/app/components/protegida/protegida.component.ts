import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styleUrls: ['./protegida.component.css']
})
export class ProtegidaComponent implements OnInit {

  profile: any;

  constructor(public _auth: AuthService) { }

  ngOnInit() {
    if (this._auth.userProfile) {
      this.profile = this._auth.userProfile;
    } else {
      this._auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
  }


}

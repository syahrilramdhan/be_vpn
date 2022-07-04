"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[8056],{81666:(Ee,L,o)=>{o.r(L),o.d(L,{default:()=>ye});var e=o(67294),s=o(68547),I=o(92699),E=o(97132),M=o(78862),F=o(62031),H=o(19408),j=o(80768),B=o.n(j),k=o(23724),C=o(49656),Q=o(36232),W=o.n(Q),O=o(63955);const Z=[{name:"name",key:"name",metadatas:{label:"Name",sortable:!0}},{name:"description",key:"description",metadatas:{label:"Description",sortable:!1}},{name:"type",key:"type",metadatas:{label:"Token type",sortable:!1}},{name:"createdAt",key:"createdAt",metadatas:{label:"Created at",sortable:!1}}];var h=o(49425),y=o(41798),z=o(67826),G=o(45697),i=o.n(G),Y=o(18568),J=o.n(Y),K=o(30741),X=o(5493),q=Object.defineProperty,S=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable,w=(a,t,n)=>t in a?q(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n,te=(a,t)=>{for(var n in t||(t={}))_.call(t,n)&&w(a,n,t[n]);if(S)for(var n of S(t))ee.call(t,n)&&w(a,n,t[n]);return a};const N=({tokenName:a,onClickDelete:t})=>{const{formatMessage:n}=(0,E.useIntl)(),{trackUsage:c}=(0,s.useTracking)();return e.createElement(X.Box,te({paddingLeft:1},s.stopPropagation),e.createElement(K.IconButton,{onClick:()=>{c("willDeleteToken"),t()},label:n({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${a}`}),noBorder:!0,icon:e.createElement(J(),null)}))};N.propTypes={tokenName:i().string.isRequired,onClickDelete:i().func.isRequired};const ne=N;var ae=o(19352),oe=o.n(ae),se=o(78384);const le=(0,se.default)(s.Link)`
  svg {
    path {
      fill: ${({theme:a})=>a.colors.neutral500};
    }
  }

  &:hover {
    svg {
      path {
        fill: ${({theme:a})=>a.colors.neutral800};
      }
    }
  }
`,R=({tokenName:a,tokenId:t})=>{const{formatMessage:n}=(0,E.useIntl)(),{location:{pathname:c}}=(0,C.useHistory)();return e.createElement(le,{to:`${c}/${t}`,title:n({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:`${a}`})},e.createElement(oe(),null))};R.propTypes={tokenName:i().string.isRequired,tokenId:i().oneOfType([i().string,i().number]).isRequired};const re=R;var ie=Object.defineProperty,$=Object.getOwnPropertySymbols,ce=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable,x=(a,t,n)=>t in a?ie(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n,ue=(a,t)=>{for(var n in t||(t={}))ce.call(t,n)&&x(a,n,t[n]);if($)for(var n of $(t))de.call(t,n)&&x(a,n,t[n]);return a};const D=({canDelete:a,canUpdate:t,onClickDelete:n,withBulkActions:c,rows:m})=>{const{formatMessage:f}=(0,E.useIntl)(),[{query:d}]=(0,s.useQueryParams)(),[,p]=d.sort.split(":"),{push:r,location:{pathname:g}}=(0,C.useHistory)(),{trackUsage:P}=(0,s.useTracking)(),v=m.sort((l,b)=>{const T=l.name.localeCompare(b.name);return p==="DESC"?-T:T});return e.createElement(y.Tbody,null,v.map(l=>e.createElement(y.Tr,ue({key:l.id},(0,s.onRowClick)({fn:()=>{P("willEditTokenFromList"),r(`${g}/${l.id}`)},condition:t})),e.createElement(y.Td,null,e.createElement(h.Typography,{textColor:"neutral800",fontWeight:"bold"},l.name)),e.createElement(y.Td,{maxWidth:(0,s.pxToRem)(250)},e.createElement(h.Typography,{textColor:"neutral800",ellipsis:!0},l.description)),e.createElement(y.Td,null,e.createElement(h.Typography,{textColor:"neutral800"},f({id:`Settings.apiTokens.types.${l.type}`,defaultMessage:"Type unknown"}))),e.createElement(y.Td,null,e.createElement(h.Typography,{textColor:"neutral800"},e.createElement(s.RelativeTime,{timestamp:new Date(l.createdAt)}))),c&&e.createElement(y.Td,null,e.createElement(z.Flex,{justifyContent:"end"},t&&e.createElement(re,{tokenName:l.name,tokenId:l.id}),a&&e.createElement(ne,{tokenName:l.name,onClickDelete:()=>n(l.id)}))))))};D.defaultProps={canDelete:!1,canUpdate:!1,onClickDelete:()=>{},rows:[],withBulkActions:!1},D.propTypes={canDelete:i().bool,canUpdate:i().bool,onClickDelete:i().func,rows:i().array,withBulkActions:i().bool};const me=D;var A=(a,t,n)=>new Promise((c,m)=>{var f=r=>{try{p(n.next(r))}catch(g){m(g)}},d=r=>{try{p(n.throw(r))}catch(g){m(g)}},p=r=>r.done?c(r.value):Promise.resolve(r.value).then(f,d);p((n=n.apply(a,t)).next())});const pe=()=>{(0,s.useFocusWhenNavigate)();const a=(0,k.useQueryClient)(),{formatMessage:t}=(0,E.useIntl)(),n=(0,s.useNotification)(),{allowedActions:{canCreate:c,canDelete:m,canUpdate:f,canRead:d}}=(0,s.useRBAC)(I.Z.settings["api-tokens"]),{push:p}=(0,C.useHistory)(),{trackUsage:r}=(0,s.useTracking)(),{startSection:g}=(0,s.useGuidedTour)(),P=(0,e.useRef)(g);(0,e.useEffect)(()=>{P.current&&P.current("apiTokens")},[]),(0,e.useEffect)(()=>{p({search:W().stringify({sort:"name:ASC"},{encode:!1})})},[p]);const{data:v,status:l,isFetching:b}=(0,k.useQuery)(["api-tokens"],()=>A(void 0,null,function*(){r("willAccessTokenList");const{data:{data:u}}=yield O.be.get("/admin/api-tokens");return r("didAccessTokenList",{number:u.length}),u}),{enabled:d,onError:()=>{n({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),T=d&&(l!=="success"&&l!=="error"||l==="success"&&b),fe=(0,k.useMutation)(u=>A(void 0,null,function*(){yield O.be.delete(`/admin/api-tokens/${u}`)}),{onSuccess:()=>A(void 0,null,function*(){yield a.invalidateQueries(["api-tokens"]),r("didDeleteToken")}),onError:u=>{var U,V;(V=(U=u==null?void 0:u.response)==null?void 0:U.data)!=null&&V.data?n({type:"warning",message:u.response.data.data}):n({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),ge=d&&v,ve=d&&!v&&!c,Te=d&&!v&&c;return e.createElement(F.Main,{"aria-busy":T},e.createElement(s.SettingsPageTitle,{name:"API Tokens"}),e.createElement(M.HeaderLayout,{title:t({id:"Settings.apiTokens.title",defaultMessage:"API Tokens"}),subtitle:t({id:"Settings.apiTokens.description",defaultMessage:"List of generated tokens to consume the API"}),primaryAction:c?e.createElement(s.LinkButton,{"data-testid":"create-api-token-button",startIcon:e.createElement(B(),null),size:"L",onClick:()=>r("willAddTokenFromList"),to:"/settings/api-tokens/create"},t({id:"Settings.apiTokens.create",defaultMessage:"Create new API Token"})):void 0}),e.createElement(M.ContentLayout,null,!d&&e.createElement(s.NoPermissions,null),ge&&e.createElement(s.DynamicTable,{headers:Z,contentType:"api-tokens",rows:v,withBulkActions:m||f,isLoading:T,onConfirmDelete:u=>fe.mutateAsync(u)},e.createElement(me,{canDelete:m,canUpdate:f,rows:v,withBulkActions:m||f})),Te&&e.createElement(s.NoContent,{content:{id:"Settings.apiTokens.addFirstToken",defaultMessage:"Add your first API Token"},action:e.createElement(H.Button,{variant:"secondary",startIcon:e.createElement(B(),null)},t({id:"Settings.apiTokens.addNewToken",defaultMessage:"Add new API Token"}))}),ve&&e.createElement(s.NoContent,{content:{id:"Settings.apiTokens.emptyStateLayout",defaultMessage:"You don\u2019t have any content yet..."}})))},ye=()=>e.createElement(s.CheckPagePermissions,{permissions:I.Z.settings["api-tokens"].main},e.createElement(pe,null))}}]);

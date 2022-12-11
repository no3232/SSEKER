<template>
    <div>
        <div>
            <img src="https://s3-alpha-sig.figma.com/img/d702/38a0/f510bbf1aea91cc9913ebf98ef1b41da?Expires=1671408000&Signature=HFldC2b689eXB2MRgdIDAptQaps1IHoN4p~tyjXOJmPTzS4~P0Xyd9-PUNnUxSPt-ZUBKPJAtQlNgpgz~hALS2vDxOBpDrggXNBaiCkaYb6jluG1KtcWXpxmXD8h6m3Qd4BrA~c~rjBJlKLzoyj0lxo6wtMCe6A5AGnJwBd6Kan4cJC~MVh1qE54ACCLrWVSZJeljxjRFQl5x2C76M2emhxHyK-XKYfbmeYjckGjwo8yX8mscoAGWbgyRXJztuVHHQcDvWbnwo-zAfsGfUyWMWj4WsnQRgHCOSYM13N2xl~NuBwK-ltBxecGVxbzEy~41X~1qLHd~7EBrkKpKbXfDw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" class="main-image" alt="Responsive image">
        </div>
        <div class="input-group d-flex justify-content-center container-sm my-5">
            <input type="search" class="form-control rounded mx-3" placeholder="Search" aria-label="Search" aria-describedby="search-addon"/>
            <button type="button" class="btn btn-outline-primary rounded">search</button>
        </div>
        <ADProjectListVue/>
        <hr>
        <ADPeopleListVue/>
        <hr>
        <EventListVue/>
    </div>
</template>

<script>
import ADProjectListVue from '@/components/Project/ADProjectList'
import ADPeopleListVue from '@/components/People/ADPeopleList'
import EventListVue from '@/components/Event/EventList'
export default {
    components: {
        ADProjectListVue,
        ADPeopleListVue,
        EventListVue,
    }
}
</script>

<style>

.main-image {
    width: 100%;
}
</style>